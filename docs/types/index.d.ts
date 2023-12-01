/*
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

// TypeScript Version: 4.1

/**
* Interface describing `dmax`.
*/
interface Routine {
	/**
	* Computes the maximum value of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = dmax( x.length, x, 1 );
	* // returns 2.0
	*/
	( N: number, x: Float64Array, stride: number ): number;

	/**
	* Computes the maximum value of a double-precision floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = dmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	ndarray( N: number, x: Float64Array, stride: number, offset: number ): number;
}

/**
* Computes the maximum value of a double-precision floating-point strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - stride length
* @returns maximum value
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dmax( x.length, x, 1 );
* // returns 2.0
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dmax.ndarray( x.length, x, 1, 0 );
* // returns 2.0
*/
declare var dmax: Routine;


// EXPORTS //

export = dmax;
