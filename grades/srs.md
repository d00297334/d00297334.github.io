# Software Requirements Specification for Grades AF

Version 1.0 approved

Prepared by Edwin, Heather, Kath, and Victoria
date created: 2/25/2018

## Revision History

- Name, Date, Reason For Changes, Version
- 02/25/2018 Initial Additions, low level planning.
<<<<<<< HEAD

=======
- 02/27/2018 Met as a group, worked on functional requirements. 
- 03/06/2018 Added onto interface requirements.
>>>>>>> e41576018c25eaa5721841113a27f2d2f9676468
## 1. Introduction

### 1.1 Purpose

The product that this document pertains to is our web application that we will be developing to calculate grades. It will have the ability to calculate overall G.P.A., semester G.P.A., course grades based on weights. This SRS describes this single project. This SRS should describe the whole project and it's requirements. 

### 1.2 Document Conventions


The lists throughout this document will be bulleted and bolded to show emphasis on some of our main points and parts of the project. Higher level or parent requirements or elements will have subelements that will shown with indentation. Note: G.P.A. or GPA stands for 'grade point average' which is an educational grading scale based on letter grades and points. 

### 1.3 Intended Audience and Reading Suggestions


This document could be seen by:
- developers
- project managers
- instructor

The remaining part of this document contains information on the project `Grades AF`. 

### 1.4 Product Scope


This project's main purpose is to be an accessible online web app where students can calculate their grades. They will be able to calculate GPA and class grades based on category weights. The goals are to make an easy to navigate interface that is clean and works for all ages. The user should also be able to add as many fields as they want. It will also use computed values to calculate the result without the user having to submit. 

### 1.5 References


<<<<<<< HEAD
Source: [VueJS Documentation] (https://vuejs.org/)
Source: [ExpressJS Documentation] (https://expressjs.com/)
Source: [NodeJS Documentation] (https://nodejs.org/en/docs/)
=======
Source: [VueJS Documentation] (https://vuejs.org/)<br>
Source: [ExpressJS Documentation] (https://expressjs.com/)<br>
Source: [NodeJS Documentation] (https://nodejs.org/en/docs/)<br>
>>>>>>> e41576018c25eaa5721841113a27f2d2f9676468
Source: [Vuetify] (https://vuetifyjs.com/en/getting-started/quick-start)

## 2. Overall Description

### 2.1 Product Perspective


This product is self contained and is designed to be a replacement for an existing software. 

### 2.2 Product Functions


Overview of Product Functions:
- Calculate Cummulative G.P.A.
- Calculate a letter grade 
- Calculate semester G.P.A.

### 2.3 User Classes and Characteristics


**Teenager:** 
&ndash; some education
&ndash; likely to use at end of year/end of terms

**Young Adult:**
&ndash; likely a college student
&ndash; use more frequently; spring and fall/end of semester
&ndash; more education

**Adult:**
&ndash; likely to have a degree
&ndash; uses app to check a child's grades or someone other than their own

### 2.4 Operating Environment


This software will be hosted online using a platform as a service (PaaS), likely Heroku (https://www.heroku.com/). It will have a NodeJS runtime environment and use an express server. There are not currently plans for a database, but if needed, it will use MongoDB (noSQL/schemaless). 

### 2.5 Design and Implementation Constraints


Because we are using a PaaS, we will not have control of hardware and the speeds may be slower. However, we do not plan on having a lot of users, so this should be enough CPU and memory reserved for the app. Refer to **Section 2.4** for more on specific technologies and languages. 

### 2.6 User Documentation


This software is aiming to be very easy to use and self explanatory. So the only documenation will be on the project description and within the interface. There will not be any manuals or tutorials. 

### 2.7 Assumptions and Dependencies


Depending on how different schools, districts, or institutions calculate their grades, there app would have to change. We may also have to include different middlewares in the app, like a body parser or mongoose if the app requires a database. 

## 3. External Interface Requirements

### 3.1 User Interfaces

<<<<<<< HEAD
<Describe the logical characteristics of each interface between the software
product and the users. This may include sample screen images, any GUI standards
or product family style guides that are to be followed, screen layout
constraints, standard buttons and functions (e.g., help) that will appear on
every screen, keyboard shortcuts, error message display standards, and so on.
Define the software components for which a user interface is needed. Details of
the user interface design should be documented in a separate user interface
specification.>

### 3.2 Hardware Interfaces

<Describe the logical and physical characteristics of each interface between the
software product and the hardware components of the system. This may include the
supported device types, the nature of the data and control interactions between
the software and the hardware, and communication protocols to be used.>

### 3.3 Software Interfaces

<Describe the connections between this product and other specific software
components (name and version), including databases, operating systems, tools,
libraries, and integrated commercial components. Identify the data items or
messages coming into the system and going out and describe the purpose of each.
Describe the services needed and the nature of communications. Refer to
documents that describe detailed application programming interface protocols.
Identify data that will be shared across software components. If the data
sharing mechanism must be implemented in a specific way (for example, use of a
global data area in a multitasking operating system), specify this as an
implementation constraint.>

### 3.4 Communications Interfaces

<Describe the requirements associated with any communications functions required
by this product, including e-mail, web browser, network server communications
protocols, electronic forms, and so on. Define any pertinent message formatting.
Identify any communication standards that will be used, such as FTP or HTTP.
Specify any communication security or encryption issues, data transfer rates,
and synchronization mechanisms.>

## 4. System Features

<This template illustrates organizing the functional requirements for the
product by system features, the major services provided by the product. You may
prefer to organize this section by use case, mode of operation, user class,
object class, functional hierarchy, or combinations of these, whatever makes the
most logical sense for your product.>

<You may modify the structure of this secture according to the software process
you are using for this project. For example, if you are using agile (or some of
its derivations) and you need to format the features in terms of user stories,
you may replace the format below with your own adaptation for each user story.>

### 4.1 System Feature 1

<Don’t really say "4.1 System Feature 1" for the heading here. Rewrite the
heading as the feature name in just a few words.>

### 4.1.1 Description and Priority

<Provide a short description of the feature and indicate whether it is of High,
Medium, or Low priority. You could also include specific priority component
ratings, such as benefit, penalty, cost, and risk (each rated on a relative
scale from a low of 1 to a high of 9).>

### 4.1.2 Stimulus/Response Sequences

<List the sequences of user actions and system responses that stimulate the
behavior defined for this feature. These will correspond to the dialog elements
associated with use cases.>

### 4.1.3 Functional Requirements

<Itemize the detailed functional requirements associated with this feature.
These are the software capabilities that must be present in order for the user
to carry out the services provided by the feature, or to execute the use case.
Include how the product should respond to anticipated error conditions or
invalid inputs. Requirements should be concise, complete, unambiguous,
verifiable, and necessary. Use "TBD" as a placeholder to indicate when necessary
information is not yet available.>

<Each requirement should be uniquely identified with a sequence number or a
meaningful tag of some kind.>

- REQ-1:
- REQ-2:

### 4.2 System Feature 2 (and so on)
=======
Because we are going to place it on a website, users can click on input boxes to add infomation about their classes. The 1st box will be the name/number of the class. The second box with be for the grade, and then last box will be for the number of credits. Likely will be designed using Material Design. At minimum 1 grade entry, at maximum 10 grade entries(TBD). An enter key shortcut for user ease. 



### 3.2 Hardware Interfaces

No hardware interface, this will be hosted online using a PaaS. We will not be controlling any parts of this aspect. However, it will be supported on any device that can establish an internet connection because on the mobile friendly design. All communication done over HTTP. HTTPS?


### 3.3 Software Interfaces

- VueJS 2.6.8
- ExpressJS 4.16.4
- Vuetify 2.0.0
- NodeJS 10.15.3
- MongoDB 4.0.0

Connection through Client Server model. Using MVC. Database schema to use strings and integers. 



### 3.4 Communications Interfaces

All communication established over HTTP. Sent as url encoded data or JSON data. Will not be needing encryption at this time, due to no sensitive information being requested or receieved. Transfer speeds at free tier level of Heroku PaaS. 
* [ https://www.heroku.com/pricing ] <br> 
* [ https://devcenter.heroku.com/articles/limits ]



## 4. System Features

###### System Features/Use Cases:
1. A user wants to calculate a GPA from scratch.
2. A user wants to add letter grades to a current GPA.
3. A user wants to see what letter grades it takes to boost a GPA.
4. A user wants to calculate what letter grade they will recieve based on percentages. 
5. A user wants to calculate a letter grade from weights and points. 

###### Requirements:
1. Research different ways of calculating and evaluating grades
    - weighted
    -  non-weighted
2. Algorithms to match the math required for the calculations. 


###### Undetermined System Requirements:
If this project requires a database, we will need to develop a schema to classify our data. 


### 4.1 User Interface that is Interactive and Responsive

The interface will be hosted online to allow for easy access. The user should find it easy to navigate, and the visual design should appeal to many types of people. It should work quick and use 'watchers' (or the equivalent in another language) to compute values without extra work from the user. 


### 4.1.2 Stimulus/Response Sequences


###### Note: The user is not required to log in or authenticate to use the software.

- User chooses the type of calculation they want to do. (most likely by using a button, maybe a different page/tab)
- User enters in the data they have. 
    - Note: This may be letter grades, percentages, or a cumulative GPA.
- Can add more inputs or remove inputs.
- Client will use watchers/computed values to average the grades without the user needing to hit a trigger/event.

### 4.1.3 Functional Requirements

###### Summary of Requirements
- REQ: Allow user to enter all kinds of data, but limit the unwanted data, possibly using regular expressions. Calculate accurately based on if they choose weighted or unweighted. Fast calculations and friendly interface.

###### Possible Validation Errors:
- User enters letters not A-F
- User uses symbols other than +/-
- User enters multiple letters or numbers in one input
- User enters invalid GPA
- User enters invalid decimal place of GPA


### 4.2 System Feature 2 (and so on)
- TBD
>>>>>>> e41576018c25eaa5721841113a27f2d2f9676468

## 5. Other Nonfunctional Requirements

### 5.1 Performance Requirements
<<<<<<< HEAD

<If there are performance requirements for the product under various
circumstances, state them here and explain their rationale, to help the
developers understand the intent and make suitable design choices. Specify the
timing relationships for real time systems. Make such requirements as specific
as possible. You may need to state performance requirements for individual
functional requirements or features.>

### 5.2 Safety Requirements

<Specify those requirements that are concerned with possible loss, damage, or
harm that could result from the use of the product. Define any safeguards or
actions that must be taken, as well as actions that must be prevented. Refer to
any external policies or regulations that state safety issues that affect the
product’s design or use. Define any safety certifications that must be
satisfied.>

### 5.3 Security Requirements

<Specify any requirements regarding security or privacy issues surrounding use
of the product or protection of the data used or created by the product. Define
any user identity authentication requirements. Refer to any external policies or
regulations containing security issues that affect the product. Define any
security or privacy certifications that must be satisfied.>

### 5.4 Software Quality Attributes

<Specify any additional quality characteristics for the product that will be
important to either the customers or the developers. Some to consider are:
adaptability, availability, correctness, flexibility, interoperability,
maintainability, portability, reliability, reusability, robustness, testability,
and usability. Write these to be specific, quantitative, and verifiable when
possible. At the least, clarify the relative preferences for various attributes,
such as ease of use over ease of learning.>

### 5.5 Business Rules

<List any operating principles about the product, such as which individuals or
roles can perform which functions under specific circumstances. These are not
functional requirements in themselves, but they may imply certain functional
requirements to enforce the rules.>

## 6. Other Requirements

<Define any other requirements not covered elsewhere in the SRS. This might
include database requirements, internationalization requirements, legal
requirements, reuse objectives for the project, and so on. Add any new sections
that are pertinent to the project.>
=======
The main requirements are for the software to calculate the users input and give them back a gpa. It also needs to be able to calculate many different grades, from 1 to 10. 
Also, users can add already calculated gpas. Because these calculations are simple, time shouldn't be a problem. We will add a time out feature just in case. 

### 5.2 Safety Requirements
There is no real need for safety because there is no data base, no user login, and no saved information. 

### 5.3 Security Requirements

The only security requirements is that people cannot copy our code and use it as their own. Because there is no database we will not need to much security. 

### 5.4 Software Quality Attributes
Adaptability, to be able to adapt to many different gpas and lines of information.
availability, to be able to be used on the internet. 
correctness, the math must be right in order to have the calculation right.
reliability, as said above, reliable calculation and reliable availably. 
reusability, can be reused as many times as needed, add a restart button.
usability, easy user interface and clear instruction. 

### 5.5 Business Rules
N/A, because we are not selling it.

## 6. Other Requirements
No Database Requirements as information will not be stored. A disclaimer will 
be placed stating that these are not official transcripts or grades provided by 
any institution but instead purely based on user's input. The calculations will
be displayed in English(USA).

>>>>>>> e41576018c25eaa5721841113a27f2d2f9676468

## Appendix A: Glossary

<Define all the terms necessary to properly interpret the SRS, including
acronyms and abbreviations. You may wish to build a separate glossary that spans
multiple projects or the entire organization, and just include terms specific to
a single project in each SRS.>

## Appendix B: Analysis Models

<Optionally, include any pertinent analysis models, such as data flow diagrams,
class diagrams, state-transition diagrams, or entity-relationship diagrams.>

## Appendix C: To Be Determined List

<Collect a numbered list of the TBD (to be determined) references that remain in
the SRS so they can be tracked to closure.>
<<<<<<< HEAD
=======

- 4.2 Other System Features
- 3.1 User Interface Requirements
    * do we want to limit the max entries?
- 3.2 Hardware Interface Requirements
    * currently no plans to use HTTPS. Is there a need? Maybe in the future. 
>>>>>>> e41576018c25eaa5721841113a27f2d2f9676468
