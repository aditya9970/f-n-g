


<br />
<p align="center">


  <h3 align="center">F_N_G</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/aditya9970/f-n-g"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>





### Built With

* [React JS]()
* [Tailwind CSS]()
* [Framer motion]()



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/aditya9970/f-n-g.git
   ```
2. Install NPM packages
   ```sh
   npm install 
   ```



<!-- USAGE EXAMPLES -->
## Usage

 App is designed to take feedback from the user. A single user may provide multiple feedback (updated). 
 User need to provided appropriated contact information and rating based on multiple parameters out of 5
 Tab section can be use to delete/update the feedback provided by user.


##Structure

Form Section
    Form section include a form that user can use to provide the feedback. The same component can be used to update the form
    Form will check for correct Name, Phone Number, Email using RegExp. 
    User can provide multiple feedbacks with same Name, Email, Phone No.
    Form sections is insync with local storage to maintain the data in case of application closure

Table Section
    Table section contains the collection of the all feedbacks in ascending order based on the creation of the form.
    Table section provide all user to update/delete/preview the feedbacks.
    Table section also is insync with local storage to provided / store the collections offline & in case of app closure.

App Section
    App section is container for the whole app it contain all components and maintains the global state/store. 
    Store is accessible to the all components inside app with the use of useConxt Hook.
    App section will load all the local storage data to the store when done mounting itself.




