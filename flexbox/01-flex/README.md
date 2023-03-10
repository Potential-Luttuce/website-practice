# README.MD

# flexbox 01
 - https://www.internetingishard.com/html-and-css/flexbox
 - This folder follow the above link through flexbox learning items.
 - flexbox.html & default.css follow along with site.
 - I will add my own html & css to this folder to recreate from scratch.
 

# ~ display: ~

- display: flex; ~ This line of code will make the parent or 
container element display flex, making all its children
adapt the display flex to become flex items.
- display: flex; ~ Makes current container flex container and all chidren of this container a flex item.
- display: inline-block; ~ Width & Height respcted adds whole block to line of text.

# ~ justify-content ~
- horizontal x axis alignment 
- justify-content: center; ~ This line will align the flex container within the bounds of the allowed space.
- justify-content: flex-end/start; ~ Starts the content towards the start or end of the parent flex container.
### Example:
- (Links in menu: this was done with the help of groupng these two divs together)
- justify-content: space-between; ~ Adds space between each flex item in the container (Header).

# ~ align-items ~
- 'cross -axis' or vertical alignment, similar to justify-content
- align-items: center; items will be aigned in the center of the vertical allowed space of the flex container.
## align-self (flex item alignment)
- align-self: flex-start/end ~ similar to justify or align but will single out specific flex items.
### Example:
- .social & .subscribe flex-end in the header container.

# ~ flex-wrap ~
- Changes the 'direction' of the content (photo-grid-items)
- flex-wrap: wrap; ~ Content will flow to a new lign once it reaches the edge of the page.
- flex-wrap: wrap-reversed; ~ Content will stack ontop of itself when it reaches the edge of the page.

# ~ flex-direction ~
- *This flips axis for justify & align*
- flex-direction: column; ~ Changes the orientation of flec items into a stack 
- flex-direction: wrap-reversed; ~ This renders iems right to left on a per row basis.
### Example:
- (row 1 starting with 3 instead of 5)

# ~ order ~
- Order changes the order of a flex item within its container without affecting other items.
### Example:
- (Swapping 1 & 5 or first-item & last-item)
- order: 1; / order: -1

# ~ flex ~
- *This is similar to justify-content except the extra spaces is put into the items themselves so they take up more room and fit into the container fully*
- flex: 1; ~ Tella the items selected to stretch and match width of their container. 
### Example:
- Flex-three can be stretced twice as fast when flex: 2; is added.
## flex: initial;
- Mixing and matching flexible items with fixed with items.
### Example:
- In our footer footer-one & footer-three have a fixed width. This with is respected and footer-two will inherit flex: 1; (cascade rule specificity) and grow to fill the remaining space no matter how little it is.
# flex shorthand
- flex: 1; ~ Is short hand for:
- flex-grow: 1; flex-shrink: 1; flex-basis: 0;
- *flec: <max> <min> <ideal size>
## flex-grow:
- Setting flex-grow to 1 will make all items grow to same size and fill parent container.
- Setting flex-grow toa numerical value for ONE specific item will make that item grow differently relative to other itmes, whether they are fixed or also flex with a different grow or shrink value.
## Flex-shrink:
-Applys only if size of all flex items is greater than parent container.
- As expected this is the opposite of flex-grow. Items will shrink as a certain rate/percentage based off size of container.
- Review this page for isstance: https://www.theodinproject.com/lessons/foundations-growing-and-shrinking
## Flex-bases:
- This sets the baseline from where we shrink or grow.
- Default is 0 when you specify flex: 1 (flex: 1 1 0).
- Flex: auto is same as flex: 1 1 0.
 
 ### Example
 *one box growing faster after ideal size met*
 .container {
  border: 5px solid #ffcc5c;
  display: flex;
}

.home {
  flex: 1 1 200px;
}

.logout {
  flex: 10 1 200px; < shrink 1 under 200px, grow 10 above 200px
}

# Margin: auto;
- This gives us same output as nesting our two link items (signup & login).
- But instead it uses margin auto to use all available space in menu and pushes itself and login (the following flex item) to the right.
