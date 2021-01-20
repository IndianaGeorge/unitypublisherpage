

![title](/images/AsPerSpec-big.jpg)

# Support

This is the support page for the Unity assets from [AsPerSpec](https://assetstore.unity.com/publishers/13320).

For support please write to [asperspecunity@gmail.com](mailto:asperspecunity@gmail.com) and include the **receipt code** in your email. I'll try to reply as soon as possible.

# Our assets

## [Carousel Toggler](https://assetstore.unity.com/packages/tools/gui/carousel-toggler-36671)
A dynamic, index-free  uGUI carousel based on uGUI Toggles and a ScrollRect. It allows you to add and remove toggles without worry.
When scrolling ends, the ScrollRect will snap such that the nearest toggle gets centered and toggled on.
This allows for carousels in any shape, there is no need for them to be in a straight line in any direction (an example of this is the included world map scene).
Toggles should belong to a toggle group, so toggling one on will turn the others off and you can use the ToggleGroup.ActiveToggles to get the list of toggles and find which one is on (with Toggle.isOn), or you can subscribe to Toggle.onValueChanged and check if the toggle is on (since another toggle will be changing from on to off).
A rotator component is included, to cycle through the toggles in the order of the hierarchy (you can still move them around and add/remove more toggles while it cycles).

## [Server Environment](https://assetstore.unity.com/packages/tools/utilities/server-environment-45991)
A simple way to set up many server environments and switch between them easily, including only the current environment in the build time (so you don't reveal your testing/development addresses to the world).
In Window/Server Environment menu you'll open up a small window with a list of server names and addresses which you can modify and save. This list gets saved in the project but does not go in the build, only the currently selected environment does.
Current environment is available as a static property (Environment.URL) that you can easily reference from anywhere in your project without worrying about instances.

## [Easy Datalink](https://assetstore.unity.com/packages/tools/network/easy-datalink-45454)
Easily collect data from uGUI fields, send it to an address and get notifiend when the response arrives. It now includes a modular framework for JSON, so you can route defined properties to separate handlers when they are present in the response.
This asset includes the Server Environment asset, so you set the target address only once in the inspector and still can test in different environments by switching the current Server Environment.
