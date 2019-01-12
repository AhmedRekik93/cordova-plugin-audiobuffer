var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Audio Buffer
 * @description This plugin defines a global AudioBuffer object, which permits to get the decibel values from the microphone.
 * @usage
 * ```typescript
 * import { AudioBuffer } from 'cordova-plugin-audiobuffer';
 *
 * constructor(private dbMeter: DBMeter) { }
 *
 * ...
 *
 *
 * // Start listening
 * let subscription = this.dbMeter.start().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Check if we are listening
 * this.dbMeter.isListening().then(
 *   isListening => console.log(isListening)
 * );
 *
 * // Stop listening
 * subscription.unsubscribe();
 *
 * // Delete DBMeter instance from memory
 * this.dbMeter.delete().then(
 *   () => console.log('Deleted DB Meter instance'),
 *   error => console.log('Error occurred while deleting DB Meter instance')
 * );
 * ```
 */
var AudioBuffer = (function (_super) {
    __extends(AudioBuffer, _super);
    function AudioBuffer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts listening
     * @returns {Observable<any>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
     */
    /**
     * Starts listening
     * @returns {Observable<any>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
     */
    AudioBuffer.prototype.start = /**
     * Starts listening
     * @returns {Observable<any>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
     */
    function () {
        return;
    };
    /**
     * Stops listening
     * @hidden
     */
    /**
     * Stops listening
     * @hidden
     */
    AudioBuffer.prototype.stop = /**
     * Stops listening
     * @hidden
     */
    function () {
        return;
    };
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    AudioBuffer.prototype.isListening = /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    function () {
        return;
    };
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    AudioBuffer.prototype.delete = /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    function () {
        return;
    };
    AudioBuffer.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            observable: true,
            clearFunction: 'stop'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], AudioBuffer.prototype, "start", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AudioBuffer.prototype, "stop", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AudioBuffer.prototype, "isListening", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AudioBuffer.prototype, "delete", null);
    /**
     * @name DB Meter
     * @description This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.
     * @usage
     * ```typescript
     * import { DBMeter } from '@ionic-native/db-meter';
     *
     * constructor(private dbMeter: DBMeter) { }
     *
     * ...
     *
     *
     * // Start listening
     * let subscription = this.dbMeter.start().subscribe(
     *   data => console.log(data)
     * );
     *
     * // Check if we are listening
     * this.dbMeter.isListening().then(
     *   isListening => console.log(isListening)
     * );
     *
     * // Stop listening
     * subscription.unsubscribe();
     *
     * // Delete DBMeter instance from memory
     * this.dbMeter.delete().then(
     *   () => console.log('Deleted DB Meter instance'),
     *   error => console.log('Error occurred while deleting DB Meter instance')
     * );
     * ```
     */
    AudioBuffer = __decorate([
        Plugin({
            pluginName: 'AudioBuffer',
            plugin: 'cordova-plugin-audiobuffer',
            pluginRef: 'AudioBuffer',
            repo: 'https://github.com/AhmedRekik93/cordova-plugin-audiobuffer',
            platforms: ['Android', 'iOS']
        })
    ], AudioBuffer);
    return AudioBuffer;
}(IonicNativePlugin));
export { AudioBuffer };
//# sourceMappingURL=index.js.map