* # Tutorials
    * [Visualice PWA on cellphone](#pwa_on_phone)
    * [Improving on IOS](#ios_improve)
---

<span id="pwa_on_phone"></span>
#### Visualice PWA on cellphone
1. Look for the option **Opciones para programador** 
2. Set toggle "Activado" as "On"
3. Set toggle "Depuracion por USB" as "On"
4. Connect the cellphone by usb to the computer
5. On the web browser of Google, put this address on the url bar `chrome://inspect/#devices`
6. Devices > Toggle next options
* Discover USB devices
* Discover network targets
7. Button `Port forwarding...`
8. Set the next config
* Number port the app it's being host
* URL adress to watch the app
* Enable `Enable port forwarding`
![configu_port](https://res.cloudinary.com/dmtvwe2ur/image/upload/v1628975296/tutorials/pwa/Screenshot_2021-08-14_160658_uoaous.png)

If the cellphone prompts an alert to allow permissions, give acess

---

<span id="ios_improve"></span>
#### Improving on IOS
By default, IOS still not accepts some features of a PWA because they're "not" standards, eventually they will add that new features in order to make them have the same functionality as on Android.

This **[entrance](https://medium.com/appscope/designing-native-like-progressive-web-apps-for-ios-1b3cdda1d0e8)** can help to fix that issues on IOS.