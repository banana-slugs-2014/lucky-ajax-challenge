# Lucky Ajax 
 
##Learning Competencies 

##Summary 

 We're going to practice converting a working **Sinatra+ActiveRecord** app into a **Sinatra+ActiveRecord+jQuery+AJAX** app. Specifically, we're going to take an application that reloads an entire page every time the user submits a form into one that just updates the portion of the DOM that needs to change.

## Learning Goals

- Learn how to convert an application that uses full-page-reloads to one that uses AJAX to update just the portions of the DOM that need updating.
- Deepen your understanding of jQuery selectors and DOM manipulation.
- Practice coming into an existing codebase and extending it.

## Objectives

### Download the Skeleton Code

To get started, you should first fork the gist and then [download the application skeleton](http://cl.ly/1l1F3N2I3E3x).

After you download the skeleton, you should `bundle` your gems and run `shotgun` to see how the app works in its current form:

```bash
$ bundle
$ shotgun
```

### Figure Out What to Change

Before you start writing any code, you should fully understand how the existing application works and use that understanding to determine which parts of the code need to change. Specifically:

1. What happens when you click the "Roll the Die" button?
2. What *should* happen instead?
3. Is it necessary to change any of the ActiveRecord models or migrations?
4. Is it necessary to change any of the Sinatra routes?
5. Where should your JavaScript code that handles the AJAX and DOM updates go?


### AJAXify It!

The following questions might help you get your bearings:

1. How do you intercept a form submission event using jQuery?
2. How can we prevent the default form-submission-event action(s) from happening?
3. How do we do an AJAX post?
4. What should we pass for the `url` argument? How about the `type` argument? (*Hint:* the HTML `form` element has this for you!)
5. How do we pass data to the server when making an AJAX call?
6. When the server responds, what code gets run? How do we access the data that the server sends back?

If you cannot answer these questions, you'll have a tough time implementing things. Take your time, use Google, and think it through!


### Submit Your Code

Once you have a version of the challenge working that doesn't relaod the entire page, go ahead and submit your solution. Any files you changed from the application skeleton should be added to the gist.
 

##Releases
###Release 0 

##Optimize Your Learning 

##Resources
