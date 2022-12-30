# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Method      |Path               |   Purpose
                                 
## GET        | /                     || home Page

## GET        | /places               || places index page

## POST      places                  ||create new places

## GET      /places/new              ||form page for creating new places

## GET     /places/:id               details about a particular place     

## PUT     /places/:id               update a particular place

## GET     /places/:id/edit          form a page for editing an existing place

## DELETE  /places/:id               delete a particular place

## POST    /places/:id/rant          Create a rant(comment)about particula place

## DELETE  /places/:id/rant/:rantId  delete a rant (comment)about a particular place

## GET     *                         404 page (match any Route not defined above ) 



