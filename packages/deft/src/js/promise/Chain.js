// Generated by CoffeeScript 1.9.3

/*
Copyright (c) 2012-2013 [DeftJS Framework Contributors](http://deftjs.org)
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

sequence(), parallel(), pipeline() methods adapted from:
[when.js](https://github.com/cujojs/when)
Copyright (c) B Cavalier & J Hann
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
 */

/**
* A collection of useful static methods for chaining execution of an Array of Functions using {@link Deft.promise.Promise Promises}.
 */
Ext.define('Deft.promise.Chain', {
  alternateClassName: ['Deft.Chain'],
  requires: ['Deft.promise.Promise', 'Deft.util.Function'],
  statics: {

    /**
    		* Execute an Array (or {@link Deft.promise.Promise Promise} of an Array) of functions sequentially.
    		* 
    		* The specified functions may optionally return their results as {@link Deft.promise.Promise Promises}.
    		*
    		* @param {Function[]/Deft.promise.Promise} fns The Array (or Promise of an Array) of functions to execute.
    		* @param {Object} scope Optional scope in which to execute the specified functions.
    		* @return {Deft.promise.Promise} Promise of an Array of results for each function call  (in the same order).
     */
    sequence: function(fns, scope) {
      var args;
      if (scope == null) {
        scope = null;
      }
      args = [].slice.call(arguments, 2);
      return Deft.Promise.reduce(fns, function(results, fn) {
        if (!Deft.isFunction(fn)) {
          throw new Error('Invalid parameter: expected a function.');
        }
        return Deft.Promise.when(fn.apply(scope, args)).then(function(result) {
          results.push(result);
          return results;
        });
      }, []);
    },

    /**
    		* Execute an Array (or {@link Deft.promise.Promise Promise} of an Array) of functions in parallel.
    		* 
    		* The specified functions may optionally return their results as {@link Deft.promise.Promise Promises}.
    		*
    		* @param {Function[]/Deft.promise.Promise} fns The Array (or Promise of an Array) of functions to execute.
    		* @param {Object} scope Optional scope in which to execute the specified functions.
    		* @return {Deft.promise.Promise} Promise of an Array of results for each function call (in the same order).
     */
    parallel: function(fns, scope) {
      var args;
      if (scope == null) {
        scope = null;
      }
      args = [].slice.call(arguments, 2);
      return Deft.Promise.map(fns, function(fn) {
        if (!Ext.isFunction(fn)) {
          throw new Error('Invalid parameter: expected a function.');
        }
        return fn.apply(scope, args);
      });
    },

    /**
    		* Execute an Array (or {@link Deft.promise.Promise Promise} of an Array) of functions as a pipeline, where each function's result is passed to the subsequent function as input.
    		* 
    		* The specified functions may optionally return their results as {@link Deft.promise.Promise Promises}.
    		* 
    		* @param {Function[]/Deft.promise.Promise} fns The Array (or Promise of an Array) of functions to execute.
    		* @param {Object} initialValue Initial value to be passed to the first function in the pipeline.
    		* @param {Object} scope Optional scope in which to execute the specified functions.
    		* @return {Deft.promise.Promise} Promise of the result value for the final function in the pipeline.
     */
    pipeline: function(fns, initialValue, scope) {
      if (scope == null) {
        scope = null;
      }
      return Deft.Promise.reduce(fns, function(value, fn) {
        if (!Ext.isFunction(fn)) {
          throw new Error('Invalid parameter: expected a function.');
        }
        return fn.call(scope, value);
      }, initialValue);
    }
  }
});
