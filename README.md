# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify


[zasalastobon](zasalastobon.com)
![Reactjs Logo](./src/logo.svg "Logo Reactjs")
|Table|column|
|:-----:|:------:|
|nioas|asdaas

``jsx
const [newTodoValue,setNewTodoValue]= React.useState('')
    const onCancel = () => {
           setOpenModal(false)
    }
    const onSubmit = (event) => {
         event.preventDefault();
        if(newTodoValue.length <= 0)return;
         addTodo(newTodoValue);
        console.log('submit')
    }

     const onChange = (event) => {
          
         setNewTodoValue(event.target.value);
     }``

<<<<<<< HEAD
 <!-- github markdown -->
=======
 <!-- github markdown-->
>>>>>>> 6c6dbf26e52afd0caa7a897e677fd9305427b234
 
 * [x] Task1
 
 * [ ] Task2
 
 * [x] Task3
     
     @zasalast
     :smiley:
     <!-- headings -->
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<!-- line breaks -->
<!-- ENTER -->

<!-- Italics -->
This is an *italic* text

This is an _italic_ text

<!-- Strongs -->
This is an **strong** text

This is an __strong__ text

<!-- StrikeTrough -->
This is an ~~striketrogh~~ text



<!-- UL -->
* item 1
* item 2
* item 3
    * item 3.1
    * item 3.2    
* item 4

<!-- OL -->
1. item 1
1. item 2
1. item 3
1. item 4

<!-- Links -->
[Faztweb.com](https://www.faztweb.com)

[Faztweb.com](https://www.faztweb.com "Custom title")
<!-- Blockquote -->
> this is a quote

<!-- Horizontal Rule -->
___
---

<!-- Inline code -->
`console.log('hello world')`

`<h1>Hello world</h1>`

<!-- IMAGES -->
<!-- ![Vscode Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png) -->

<!-- ![Vscode logo](./vscode.png "vscode") -->

<!-- GITHUB MD -->

```
first line of code
second line of code
```

```python
print("hello world")
```

```javascript
console.log('hello world')

const test = (str) => str + 'test';
```

```html
<h1>Hello World</h1>
```

<!-- TABLES -->
| Product       | Price         |quantity   |
| ------------- |:-------------:| :--------:|
| Laptop        | 3.33          | 2         |
| Mouse         | 10.33         | 1         |

* [x] task1
* [ ] task2
* [ ] task3
* [x] task4

<!-- Mentiosn -->
@faztweb :+1: :smile:
