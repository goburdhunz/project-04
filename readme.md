# Profess-Project-04 ![alt text](https://miro.medium.com/fit/c/50/50/1*HDIDs6Iq0bW-2qeYXqjp9w.png "GA logo")

*A full stack web built with React and Django*

Deployed App on Heroku - https://profess.herokuapp.com/#/

## Project 4: Profess - a networking/blogging site

After a one week introduction to Python and Django, we were tasked with building a web app with a React frontend and Django backend. We had to have at least one database model and some relationships with other models, and we had to display data based off these models to the frontend. 

I chose to build an app which was user focused and combined a blogging functionality with some tailored news, job and events services. I used three external rest APIs for the tailored content and created a main user and blog Django models in the backend. Users could register, login, create a blog, view all blogs and only when logged in, view personalised content based on preferences set when setting up their profile. 

![alt text](https://i.imgur.com/TbzTFLW.png "Project Homepage")
![alt text](https://i.imgur.com/qLG1nSP.png "Project Homepage code")

![alt text](https://i.imgur.com/NLlHCns.png "Project login page")

![alt text](https://i.imgur.com/WMDr0Kv.png "Project login page")

![alt text](https://i.imgur.com/KBKHHRW.png "Project login page")

![alt text](https://i.imgur.com/CGXRk83.png "Project blog list page")

![alt text](https://i.imgur.com/f7Ejcs7.png "Project blog list page")

## Brief

You must:

* **Build a full-stack application** 
* **Use a Python Django API - using Django REST Framework to serve your data**
* **Consume your API with a separate front-end built with React** 
* **Be a complete product** 
* **Implement thoughtful user stories/wireframes** 
* **Have a visually impressive design** 
* **Be deployed online** 
* **Have automated tests** 

## Technologies Used

* React
* DJANGO
* HTML5
* SQL
* SASS/CSS3
* JavaScript (ES6)
* Git/GitHub
* Google Fonts

## Approach

I previously worked for a German networking company called Xing and tried to make my own blogging/personalised networking app. The scale of it in my head was too big to complete within one week, but I had some of the views that I wanted to achieve as an MVP. 

The main challenge was getting used to Django - we only spent one week on Python and Django combined, compared to a longer, more complete learning process with Node/Express. We used a SQL database compared to NoSQL with the Express project which introduced another level of complexity when it came to designing models, serializers and migrations. 

I started with setting up the Django backend first and didn’t try to have anything on the frontend website until i was happy with the routing and the JSON data I was getting back. Django was really helpful in this sense as it has rest framework module which displays a UI on the frontend for the endpoints which was great for testing. Also, having the admin app for Django saved a lot of time when it came to creating data.

Once the endpoints were working i could received the correct data and fields that I wanted, I started building out the frontend, starting with the homepage. I then moved on to index/show pages and login/registration, setting up access to certain pages only when logged in and finally the three pages with external calls to APIs.

**Installation instructions**

* Fork Repo
* Run Yarn to install frontend dependencies
* Enter the Python shell with 'pipenv shell' and run 'pipenv install' to install django dependencies.

## Major hurdles

* Getting used to Django and SQLite - Models, serializers and data migrations connections in Django was quite new and difficult to manage. I would spend much more time planning my models and serializers, as i had problems during development as some fields had to be changed and this resulted in migrations and re-creation of database data. The models and serializers were the backbone and at some points, they were out of shape and re-aligning while building the frontend was challenging.
* Time - Had grand ideas at the start but time flew while building and i wanted to do so much more.
* Project idea - I also should have taken longer to really think about what i wanted to build. So more planning and detailed wireframing would have given me more direction.

## Wins
- We learnt enough Python in order to build an app and the idea was that once you know one coding language (i.e JS), you can learn other languages a little bit easier. This proved to be the case with Python, as much of the syntax was similar to JS - the differences could be learnt with enough practice.
- Django is powerful and feature-rich - You get so much with just a few scripts that its really easy to start building something quite quickly. Admin panel was very helpful with this project especially when creating data for templating. 
- Building a full-stack app in 7 days, alone. Was a lot more work than I thought it would be and i did not add everything i had wanted to but was happy to have this as an MVP.
- Very happy with the homepage - wanted for a long time to have a video homepage background.

## Key Learnings 

- Django is great
- SQL is more of a challenge than MongoDB/NoSQL - Planning is crucial here and ERD models also. Saves a lot of time down the road. 
- React is awesome!

## Future implementations

- Building out the user profile a lot more!
- Calls to APIs should be based on user interests however this was not linked up yet - API calls hardcoded at the moment.
- Improve UI of lists
- Add social register/login
