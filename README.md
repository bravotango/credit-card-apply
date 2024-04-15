# Credit Card Apply Wizard

## Description
  
  The Credit Card Apply Wizard is a user-friendly web application designed to guide users through the process of applying for a credit card. Utilizing a wizard flow, the application breaks down the application process into easy-to-follow steps, presented as slides.

## Built-in Features

This application comes with built-in HTML5 validation for form inputs, including support for date validation and custom patterns.

## Highlights
  
- <strong>Navigation: </strong>Use the "Back" and "Forward" buttons to navigate between different steps in the credit card application process.

- <strong>Input Data: </strong>Fill out the required information and provide necessary details as prompted on each step of the wizard.

- <strong>Validation: </strong>The wizard provides validation messages for incomplete or incorrect inputs.

- <strong>Progress Indicator: </strong>Keep track of progress through the application process displayed at the bottom of the wizard.

- <strong>strings.json: </strong>By storing all strings in a single JSON file, it becomes easier to manage and update text throughout the application. Developers can make changes to the wording without needing to search through the codebase.
  - <strong>Localization and Internationalization: </strong> Maintaining strings in a separate file facilitates the process of localization and internationalization. Translators can work directly with the strings.json file to provide translations for different languages, enhancing accessibility and user experience.
  
## License

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This project is licensed under the Apache License 2.0. You are free to use, modify, and distribute this software under the terms of the Apache License 2.0. See the [LICENSE](https://spdx.org/licenses/Apache-2.0.html) file for more details.

## Installation
  
  git clone git@github.com:bravotango/credit-card-apply.git

## Questions

  Repository owner:
  [https://github.com/bravotango](https://github.com/bravotango)

  Repository email: 
  <a href="mailto:seattleriot@hotmail.com">seattleriot@hotmail.com</a>

  ## NextJs
<details>

<summary>Server-Side Rendering (SSR) with Next.js</summary>

- Generating HTML content on the server before sending it to the client's browser. 
- SSR offers SEO benefits, faster initial page loads, and improved support for users on slow connections.

Next.js allows you to render pages on the server before sending them to the client's browser. When a user requests a page, the server generates the HTML content dynamically, including any data fetched from external sources or APIs. This pre-rendered HTML is then sent to the client, where it is displayed to the user. SSR offers several advantages, including improved search engine optimization (SEO), faster initial page loads, and better support for users with slow internet connections or devices.
</details>



<details>

<summary>Client-Side Rendering (CSR) with Next.js:</summary>

In addition to server-side rendering, Next.js also supports client-side rendering, where pages are rendered directly in the user's browser using JavaScript. With CSR, the initial page load consists of a minimal HTML shell, followed by JavaScript execution that fetches data and renders the page dynamically. This approach offers greater interactivity and flexibility, as pages can be updated without reloading the entire page. However, CSR may result in slower initial page loads, especially for content-heavy applications or pages with complex UI components.

Next.js provides developers with the flexibility to choose between server-side rendering, client-side rendering, or a hybrid approach based on the specific requirements of their project. This flexibility enables developers to optimize rendering performance and deliver a seamless user experience tailored to their application's needs.

</details>

