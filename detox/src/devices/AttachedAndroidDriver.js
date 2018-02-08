const Emulator = require('./android/Emulator');
const AndroidDriver = require('./AndroidDriver');

class AttachedAndroidDriver extends AndroidDriver {

  constructor(client, port) {
    super(client, port);

    this.emulator = new Emulator();
  }

  async acquireFreeDevice(name) {
    const deviceId = await this.findDeviceId({name: name});
    await this.adb.unlockScreen(deviceId);
    return deviceId;
  }
}

module.exports = AttachedAndroidDriver;