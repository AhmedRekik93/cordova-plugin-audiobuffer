var AudioBuffer = {

  /**
   * Delete the plugin.
   * Remove its native instance from the memory.
   *
   * @param  {success} callback in case of success
   * @param  {error} callback in case of error
   */
  delete: function(success, error) {
    cordova.exec(
      success,
      error,
      'AudioBuffer', 'destroy', []
    );
  },
  // HACK

  /**
   * Starts listening the audio signal.
   *
   * Returns the current decibel value from the success callback parameter
   * as a float value.
   * @param  {success} callback in case of success
   * @param  {error} callback in case of error
   */
  start: function(success, error) {
    cordova.exec(
      success,
      error,
      'AudioBuffer', 'start', []
    );
  },

  /**
   * Stops listening any audio signal.
   *
   * @param  {success} callback in case of success
   * @param  {error} callback in case of error
   */
  stop: function(success, error) {
    cordova.exec(
      success,
      error,
      'AudioBuffer', 'stop', []
    );
  },

  /**
   * Returns whether the DBMeter is listening.
   *
   * @param  {success} callback in case of success
   * @param  {error} callback in case of error
   */
  isListening: function(success, error) {
    cordova.exec(
      success,
      error,
      'AudioBuffer', 'isListening', []
    );
  }
};

AudioBuffer.ERROR_CODES = {
  '0':'DBMETER_NOT_INITIALIZED',
  '1':'DBMETER_NOT_LISTENING'
};

module.exports = AudioBuffer;
