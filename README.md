# angularStyles

### Style choices when creating angular apps

## Lots of code

So now that you've seen a little bit of Angular, you may have had the frustrating experience of looking for code examples that were supposed to help clarify Angular's syntax and structure, only to find that each example you stumble across looks so different from the last that you wind up feeling even more lost than when you began.

This is normal.

Angular is an unopinionated framework, meaning that there are many ways of structuring your app and code that will achieve the same (or at least a very similar) result. While this flexibility might seem to be an attractive feature, it is partially responsible for the overwhelming diversity of approaches you will encounter when looking at other people's code. Instead of an opinionated language, you're left with a lot of opinionated developers.

As you get more comfortable with creating Angular apps, you will get better at reading and understanding different approaches. What may appear at first to be disparate languages will start to look more like regional dialects of the same Angular language.

## Which way is best?

None of these approaches is 'the right way'. Some approaches are almost certainly better than others, but all of them were created by developers whose styling decisions were informed in part by their own opinions on subjective measures such as readability.

Some decisions were made for more functional reasons. For example, wrapping components in immediately-invoked functions (IIFE's) is good idea in order to prevent conflicts between variable names, but it is not, strictly speaking, required. To that end, it's still considered a styling choice.

## Well then, what should I do?

One of the most popular guides for building Angular applications is John Papa's style guide. In his own words:

`If you are looking for an opinionated style guide for syntax, conventions, and structuring Angular applications, then step right in...

The purpose of this style guide is to provide guidance on building Angular applications by showing the conventions I use and, more importantly, why I choose them.`

We recommend following John Papa's style guide when creating your own Angular applications. Many developers have adopted his approach when structuring their own applications, and he provides excellent documentation as well as justification for the choices he makes.

## Examples

In this repo's `examples` directory, we have included two versions of a simple Angular app. One of these apps , in the 'angularPapa' directory, was written in a way that adheres to John Papa's style guide. The other, 'angularScope', is a bit more traditional.

Take the time to check out both of these apps by first running an npm install in each directory, and using nodemon to launch their respective servers. Running these apps, you'll notice that from the user's perspective, they are completely identical.

As you compare and contrast these applications, be sure to reference the style guide along the way. We've also included comments in the code to point out differences between the two.

## Parting thoughts

Understanding these two examples will prove extremely useful in your journey to master Angular, as most of the code you encounter will be written in one of these styles. True, other developers may have other approaches, but if you have a solid grasp of these examples, it will allow you to parse and understand the vast majority of code examples on the interwebs, hopefully accelerating your learning process and minimizing plateaus and moments of frustration along the way.

Bon voyage!
