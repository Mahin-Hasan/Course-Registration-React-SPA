# Answers to the questions
### 1. Add atleast 3 project features?

#### Three project features of my project is given below:
+ I have created a fake json data with the provided image and dynamically loaded into the UI.
+ When clicked on select button the selected course is added in the Enrollment cart.
+ At the same time the price, credit hour and remaining credit hours of the course is calculated and displayed in the UI.

### 2. Discuss how you manage the state in your assignment project?
#### The ways through which I managed the state for the project is discussed below:
+ Initially I used useState and useEffect hook in the parent App.jsx file to capture interaction of the user and also set updated value when necessary.
+ I created several components as per need for my project. I passed the hook value as props to child components and destructure it for later use. In simple word I have applied the props drilling method.
+ I added an onClick function to the select button to capture interaction of user and update value as required for the project. This button is also used to life up the state.