# Project

Final year project on 'Build Nepal' using react js.

## Installation Guide

* [Download](https://www.python.org/downloads/) and install python.
* Clone the repo by running the following command
    * ```bash
      git clone https://github.com:alkawaiba/Build_Nepal.git
      ```
* Goto the project main folder using the following command
    * ```bash
      cd Project
      ```
* Setting up the project
    * if on linux based OS, run the following command
        * ```bash
          sudo apt install python3-pip
          ```
    * Install dependencies by running the following command
        * ```bash
          python3 -m pip install -r requirements.txt
          ```
    * Configure the Django Project. You may need to use `python3` or `python` as the main command. using `python3` for
      instructions
        * Make migrations for every app in database
          ```bash
          python3 manage.py makemigrations accounts
          python3 manage.py makemigrations service
          python3 manage.py makemigrations cart
          python3 manage.py makemigrations payment
          python3 manage.py makemigrations contact
          python3 manage.py makemigrations membership
          python3 manage.py makemigrations
          ```
        * Migrate the changes to the database
          ```bash
          python3 manage.py migrate
          ```
        * Create Superuser to access the admin page
          ```bash
          python3 manage.py createsuperuser
          ``` 
* Running the Project
  ```bash
  python3 manage.py runserver
  ```

