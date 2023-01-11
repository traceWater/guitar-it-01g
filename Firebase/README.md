# Firebase Apple SDKs

This directory contains the full Firebase Apple distribution, packaged as static
xcframeworks that include support for the iOS, tvOS, macOS, and Catalyst
platforms.

# Integration Instructions

Each Firebase component requires several xcframeworks in order to function
properly. Each section below lists the xcframeworks you'll need to include
in your project in order to use that Firebase SDK in your application.

Xcode 13.3.1 or newer is required.

To integrate a Firebase SDK with your app:

1. Find the desired SDK in the list below.
2. Make sure you have an Xcode project open in Xcode.
3. In Xcode, hit `⌘-1` to open the Project Navigator pane. It will open on
   left side of the Xcode window if it wasn't already open.
4. Remove any existing Firebase xcframeworks from your project.
5. Drag each xcframework from the "FirebaseAnalytics" directory into the Project
   Navigator pane. In the dialog box that appears, make sure the target you
   want the framework to be added to has a checkmark next to it, and that
   you've selected "Copy items if needed".

   > ⚠ To disable AdId support, do not copy
   > `GoogleAppMeasurementIdentitySupport.xcframework`.

   > ⚠ If the app does not use any Firebase Swift specific APIs, you do not need
   > to copy any xcframeworks whose name includes `Swift` for this and the next
   > step.

6. Drag each framework from the directory named after the SDK into the Project
   Navigator pane. Note that there may be no additional frameworks, in which
   case this directory will be empty. For instance, if you want the Database
   SDK, look in the Database folder for the required frameworks. In the dialog
   box that appears, make sure the target you want this framework to be added to
   has a checkmark next to it, and that you've selected "Copy items if needed."

   > ⚠ Do not add the Firebase frameworks to the **Embed Frameworks** Xcode build
   > phase. The Firebase frameworks are not embedded dynamic frameworks, but are
   > [static frameworks](https://www.raywenderlich.com/65964/create-a-framework-for-ios)
   > which cannot be embedded into your application's bundle.

7. If the SDK has resources, go into the Resources folders, which will be in
   the SDK folder. Drag all of those resources into the Project Navigator, just
   like the frameworks, again making sure that the target you want to add these
   resources to has a checkmark next to it, and that you've selected "Copy items
   if needed".
8. Add the `-ObjC` flag to **Other Linker Settings**:

   a. In your project settings, open the **Settings** panel for your target.

   b. Go to the Build Settings tab and find the **Other Linker Flags** setting
     in the **Linking** section.

   c. Double-click the setting, click the '+' button, and add `-ObjC`

9. Drag the `Firebase.h` header in this directory into your project. This will
   allow you to `#import "Firebase.h"` and start using any Firebase SDK that you
   have.
10. Drag `module.modulemap` into your project and update the
   "User Header Search Paths" in your project's Build Settings to include the
   directory that contains the added module map.
11. If your app does not include any Swift implementation, you may need to add
   a dummy Swift file to the app to prevent Swift system library missing
   symbol linker errors. See
   https://forums.swift.org/t/using-binary-swift-sdks-from-non-swift-apps/55989.

   > ⚠ If prompted with the option to create a corresponding bridging header
   > for the new Swift file, select **Don't create**.

12. You're done! Compile your target and start using Firebase.

If you want to add another SDK, repeat the steps above with the xcframeworks for
the new SDK. You only need to add each framework once, so if you've already
added a framework for one SDK, you don't need to add it again. Note that some
frameworks are required by multiple SDKs, and so appear in multiple folders.

The Firebase frameworks list the system libraries and frameworks they depend on
in their modulemaps. If you have disabled the "Link Frameworks Automatically"
option in your Xcode project/workspace, you will need to add the system
frameworks and libraries listed in each Firebase framework's
<Name>.framework/Modules/module.modulemap file to your target's or targets'
"Link Binary With Libraries" build phase.  Specifically, you may see the error
`ld: warning: Could not find or use auto-linked framework...` which is an
indicator that not all system libraries are being brought into your build
automatically.

"(~> X)" below means that the SDK requires all of the xcframeworks from X. You
should make sure to include all of the xcframeworks from X when including the
SDK.

## FirebaseAnalyticsSwift (~> FirebaseAnalytics)
- FBLPromises.xcframework
- FirebaseAnalytics.xcframework
- FirebaseAnalyticsSwift.xcframework
- FirebaseCore.xcframework
- FirebaseCoreInternal.xcframework
- FirebaseInstallations.xcframework
- GoogleAppMeasurement.xcframework
- GoogleAppMeasurementIdentitySupport.xcframework
- GoogleUtilities.xcframework
- nanopb.xcframework

## FirebaseABTesting (~> FirebaseAnalytics)
- FirebaseABTesting.xcframework

## FirebaseAnalyticsOnDeviceConversion (~> FirebaseAnalytics)
- FirebaseAnalyticsOnDeviceConversion.xcframework
- GoogleAppMeasurementOnDeviceConversion.xcframework

## FirebaseAppCheck (~> FirebaseAnalytics)
- FirebaseAppCheck.xcframework

## FirebaseAppDistribution (~> FirebaseAnalytics)
- FirebaseAppDistribution.xcframework
- GoogleDataTransport.xcframework

## FirebaseAuth (~> FirebaseAnalytics)
- FirebaseAuth.xcframework
- GTMSessionFetcher.xcframework

## FirebaseCrashlytics (~> FirebaseAnalytics)
- FirebaseCrashlytics.xcframework
- GoogleDataTransport.xcframework

## FirebaseDatabase (~> FirebaseAnalytics)
- FirebaseDatabase.xcframework
- FirebaseDatabaseSwift.xcframework
- FirebaseSharedSwift.xcframework
- leveldb-library.xcframework

## FirebaseDynamicLinks (~> FirebaseAnalytics)
- FirebaseDynamicLinks.xcframework

## FirebaseFirestore (~> FirebaseAnalytics)
- BoringSSL-GRPC.xcframework
- FirebaseCoreExtension.xcframework
- FirebaseFirestore.xcframework
- FirebaseFirestoreSwift.xcframework
- FirebaseSharedSwift.xcframework
- Libuv-gRPC.xcframework
- abseil.xcframework
- gRPC-C++.xcframework
- gRPC-Core.xcframework
- leveldb-library.xcframework

You'll also need to add the resources in the Resources
directory into your target's main bundle.

## FirebaseFunctions (~> FirebaseAnalytics)
- FirebaseAppCheckInterop.xcframework
- FirebaseAuthInterop.xcframework
- FirebaseCoreExtension.xcframework
- FirebaseFunctions.xcframework
- FirebaseMessagingInterop.xcframework
- FirebaseSharedSwift.xcframework
- GTMSessionFetcher.xcframework

## FirebaseInAppMessaging (~> FirebaseAnalytics)
- FirebaseABTesting.xcframework
- FirebaseInAppMessaging.xcframework
- FirebaseInAppMessagingSwift.xcframework

You'll also need to add the resources in the Resources
directory into your target's main bundle.

## FirebaseMLModelDownloader (~> FirebaseAnalytics)
- FirebaseMLModelDownloader.xcframework
- GoogleDataTransport.xcframework
- SwiftProtobuf.xcframework

## FirebaseMessaging (~> FirebaseAnalytics)
- FirebaseMessaging.xcframework
- GoogleDataTransport.xcframework

## FirebasePerformance (~> FirebaseAnalytics)
- FirebaseABTesting.xcframework
- FirebasePerformance.xcframework
- FirebaseRemoteConfig.xcframework
- GoogleDataTransport.xcframework

## FirebaseRemoteConfig (~> FirebaseAnalytics)
- FirebaseABTesting.xcframework
- FirebaseRemoteConfig.xcframework
- FirebaseRemoteConfigSwift.xcframework
- FirebaseSharedSwift.xcframework

## FirebaseStorage (~> FirebaseAnalytics)
- FirebaseAppCheckInterop.xcframework
- FirebaseAuthInterop.xcframework
- FirebaseCoreExtension.xcframework
- FirebaseStorage.xcframework
- GTMSessionFetcher.xcframework

## Google-Mobile-Ads-SDK (~> FirebaseAnalytics)
- GoogleMobileAds.xcframework
- UserMessagingPlatform.xcframework

## GoogleSignIn
- AppAuth.xcframework
- GTMAppAuth.xcframework
- GTMSessionFetcher.xcframework
- GoogleSignIn.xcframework

You'll also need to add the resources in the Resources
directory into your target's main bundle.


# Samples

You can get samples for Firebase from https://github.com/firebase/quickstart-ios:

    git clone https://github.com/firebase/quickstart-ios

Note that several of the samples depend on SDKs that are not included with
this archive; for example, FirebaseUI. For the samples that depend on SDKs not
included in this archive, you'll need to use CocoaPods or use the
[ZipBuilder](https://github.com/firebase/firebase-ios-sdk/tree/master/ReleaseTooling)
to create your own custom binary frameworks.

# Versions

The xcframeworks in this directory map to these versions of the Firebase SDKs in
CocoaPods.

               CocoaPod                | Version
---------------------------------------|---------
AppAuth                                | 1.6.0
BoringSSL-GRPC                         | 0.0.24
Firebase                               | 10.3.0
FirebaseABTesting                      | 10.3.0
FirebaseAnalytics                      | 10.3.0
FirebaseAnalyticsOnDeviceConversion    | 10.3.0
FirebaseAnalyticsSwift                 | 10.3.0
FirebaseAppCheck                       | 10.3.0
FirebaseAppCheckInterop                | 10.3.0
FirebaseAppDistribution                | 10.3.0-beta
FirebaseAuth                           | 10.3.0
FirebaseAuthInterop                    | 10.3.0
FirebaseCore                           | 10.3.0
FirebaseCoreExtension                  | 10.3.0
FirebaseCoreInternal                   | 10.3.0
FirebaseCrashlytics                    | 10.3.0
FirebaseDatabase                       | 10.3.0
FirebaseDatabaseSwift                  | 10.3.0
FirebaseDynamicLinks                   | 10.3.0
FirebaseFirestore                      | 10.3.0
FirebaseFirestoreSwift                 | 10.3.0
FirebaseFunctions                      | 10.3.0
FirebaseInAppMessaging                 | 10.3.0-beta
FirebaseInAppMessagingSwift            | 10.3.0-beta
FirebaseInstallations                  | 10.3.0
FirebaseMLModelDownloader              | 10.3.0-beta
FirebaseMessaging                      | 10.3.0
FirebaseMessagingInterop               | 10.3.0
FirebasePerformance                    | 10.3.0
FirebaseRemoteConfig                   | 10.3.0
FirebaseRemoteConfigSwift              | 10.3.0
FirebaseSharedSwift                    | 10.3.0
FirebaseStorage                        | 10.3.0
GTMAppAuth                             | 1.3.1
GTMSessionFetcher                      | 2.3.0
Google-Mobile-Ads-SDK                  | 9.13.0
GoogleAppMeasurement                   | 10.3.0
GoogleAppMeasurementOnDeviceConversion | 10.3.0
GoogleDataTransport                    | 9.2.0
GoogleSignIn                           | 6.2.4
GoogleUserMessagingPlatform            | 2.0.1
GoogleUtilities                        | 7.10.0
Libuv-gRPC                             | 0.0.10
PromisesObjC                           | 2.1.1
SwiftProtobuf                          | 1.20.3
abseil                                 | 1.20211102.0
gRPC-C++                               | 1.44.0
gRPC-Core                              | 1.44.0
leveldb-library                        | 1.22.1
nanopb                                 | 2.30909.0

