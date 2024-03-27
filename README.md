# AppScript-PlotlyJS

| Table of Contents | Description |
| -------------- | -------------- |
| - [Installation](#installation) <br> - [Usage](#usage) <br> - [Contributing](#contributing) <br> - [License](#license) <br> - [Credits](#credits--acknowledgments) <br> - [Support](#support) <br> - [Changelog](#changelog)  <br> - [FAQs](#faqs)  <br> - [Examples](#examples)  <br> - [Roadmap](#roadmap)  <br> - [Troubleshooting](#troubleshooting)  | This project builds a web app on Google Apps Script that pulls data from Google Sheet to a frontend HTML that displays graphs using [Plotly JS library](https://plotly.com/javascript/).|

## Installation
No installation is required. You just need to start with Google Drive. 

## Usage
There are 3 important files: 
* Google Sheet - where the raw data sits 
* Code.gs - where the backend data-pulling magic happens 
* index.html - where Plotly graph is displayed

(1) Create x, y data on Google Sheet (example)
(2) Open the Google Apps Script 
(3) Copy the code into code.gs
(4) Create index.html, and copy the lines of code inside 
(5) Deploy the Apps Script as Web App 

Notes: 
* You will need to authorise the app when deployed 
* Read the comments in each line to understand what it does 

## Contributing
We welcome contributions from the community to enhance the project. 

To contribute, please follow these guidelines:
1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix: ```git checkout -b feature-name```.
3. Make your changes and ensure they are well-tested.
1. Commit your changes: ```git commit -am 'Add new feature'```.
1. Push to the branch: ```git push origin feature-name```.
1. Submit a pull request with a clear description of your changes.

Please adhere to the project's coding style and commit message conventions. Bug fixes and feature additions are both appreciated! 

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software as per the terms of the license.

## Credits & Acknowledgments
We want to thank the following individuals, organizations, and resources for their inspiration and/or contributions to this project:
* [Chumbaka Asia](https://chumbaka.asia/)- this project is initiated due to the need to display graphs in a more sophisticated manner than your conventional graphing tool such as Google Sheet, Looker Studio, etc. 
* [Get __it Done!](https://www.youtube.com/@get__itdone7958) 
  * [google.script.run Web App - withSuccessHandler & withFailureHandler Callbacks](https://www.youtube.com/watch?v=ZRyxJZRlrWM)
  * [Google Web App User Info Access & Deployment - Apps Script Tutorial](https://www.youtube.com/watch?v=wwDY9iJpmzo)
  * [google.script.run replaced with JavaScript Promise API, Async & Await in a Web App
](https://www.youtube.com/watch?v=x78cKSScFGY)
* Libraries for providing a crucial library used in this project:
  * Plotly
  * XXXXX
  * XXXX

## Support
For any questions or issues regarding the project, please refer to: 
* the documentation from the Libraries used
* GitHub Issues by creating a ticket
* Zhi Xiong (via [email](mailto:zhix.chong@gmail.com))

## Changelog 

Summary of changes for each version of the project, highlighting new features, bug fixes, and improvements.

## Examples 
* [Chumbaka Report](https://script.google.com/a/macros/chumbaka.asia/s/AKfycbxew5PBE8KLSPOU45zNprhxEmFyUwUYnxI_4fkduVPTrrXAyOHlWRPq3w8ePcl2Y9NofQ/exec)
