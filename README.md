# Code challenge

## Result
Running site: [Github pages](https://ron-liu.github.io/broccoli/)

## UX considerations
- Use a sticky `toast` to inform user, which unify information and error. 
Also, the toast will disappear in 5s.      
- The modal dialog will occupy all the screen with a close button on the right top conner. 
IMO, it can remove all distractions for the user and help user concentrate. 
- In the invite form, the field level validation will display under the field, by doing that, it has enough space to show error and will not move other elements around.
 
## Implementation details
- Introduced `redux` to implement `modal dialog` and `toast` easily; 
- Heavily use `Higher Order Component` pattern with `recompose` help;
- Use `styled-component` to modular css;

## Libraries used
- `react` with `create-react-app`
- `redux` with `redux-thunk`
- `redux-form` to do the form
- `recompose` to use HOC
- `styled-components`
- `react-icons` just for the close button
- `typeface-roboto` use the google roboto fonts
- `react-spinners` for spinner

## Things to do
- [x] Display error message in invite form
- [x] Add overlay when saving
- [x] Add toast
- [x] Add validations for invite form
- [x] change the close sign on each dialog  
- [x] make pages beautiful
  - [x] home page
  - [x] invite form dialog
- [x] mobile friendly 
- [x] mobile font size friendly 
- [x] remove all warnings
- [x] Use better font  
- [ ] animation
- [ ] Handle when server is down or no response
- [ ] introduce storyboard