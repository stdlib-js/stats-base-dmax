/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/stats/base/dmax.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_positive_zero.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the maximum value of a double-precision floating-point strided array.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dmax)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dmax_ndarray)( N, X, strideX, ox );
}

/**
* Computes the maximum value of a double-precision floating-point strided array using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dmax_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	double max;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return X[ 0 ];
	}
	ix = offsetX;
	max = X[ ix ];
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		v = X[ ix ];
		if ( stdlib_base_is_nan( v ) ) {
			return v;
		}
		if ( v > max || ( v == max && stdlib_base_is_positive_zero( v ) ) ) {
			max = v;
		}
	}
	return max;
}
