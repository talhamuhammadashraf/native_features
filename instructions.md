----------------------------------------------------------------
Getting started with Git + Expo
----------------------------------------------------------------

1. Create a local folder
    mkdir native_features
    cd native_feautres

2. Clone repository:
    git clone https://github.com/bcpugh/native_features

3. Install expo-cli tools (global)
    npm install -g expo-cli

4. Install dependencies (local)
    npm install

5. Run Expo
    expo start

6. Run iOS simulator and install expo client on iOS
    (Press i)

----------------------------------------------------------------
Our design "guide":
----------------------------------------------------------------

There is an example "MyFeatureExample" that shows how all of this gets implemented.

The overall flow of how we render a component looks like this:
App.js --> Feature.Container --> Feature.Composition --> Feature.Component (majority of your work will be here)

1. The highest level entry point to a feature should be the "container" (filename _____.Container.js). This is where we hardcode sample values and sample callbacks (i.e. ()=>console.log()) for the components and then they get passed down as props.
2. There is a "composition" file where local state and lifecycle
logic should be held (filename ____.Composition.js). This might not be needed in all cases, in which case just leave it and have it render the ____.Component component
3. There is a "component" file that is a functional component (i.e. not a class, filename ___.Component.js). This is where
the "component design" begins
4. Last but not least, please define styles using StyleSheet.export({...}) at the bottom of each file rather than in-line CSS

----------------------------------------------------------------
Misc info:
----------------------------------------------------------------
1. Please store any additional images / assets in src/common/assets
2. Vector-type icons-- Please use https://fontawesome.com/icons?d=gallery as necessary. We use a helper component to render these, import it from src/common/components/HybridFontAwesome
3. Forms-- please use the helper components to use Formik:
    a. Use src/common/components/Formik.TextInput.js as a helper for the TextInputs
    b. Wrap the default export of the Form file with the HOC located at src/common/HOCs/FormikWrapper
    See working example in src/MyFeatureExample/Form.Component.js

----------------------------------------------------------------
When finished:
----------------------------------------------------------------

1. Please send a screenshot of both iOS simulator and Android simulator of the rendered components. If it has animation, please screenshot the beginning and end .
2. Make sure that all placeholders (i.e. values and callbacks) that are defined in the _____.Container.js are passed down as props get used by the children components
3. Please push to a new branch that matches the feature.


----------------------------------------------------------------
Thank you! If you have any questions, email ben@myhavenhealth.com
----------------------------------------------------------------