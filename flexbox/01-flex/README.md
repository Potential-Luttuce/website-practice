# README.MD

# flexbox 01
 - https://www.internetingishard.com/html-and-css/flexbox
 - This folder follow the above link through flexbox learning items
 - flexbox.html & default.css follow along with site 
 - I will add my own html & css to this folder to recreate from scratch 
 

## ~ display: ~

- display: flex; ~ This line of code will make the parent or 
container element display flex, making all its children
adapt the display flex to become flex items
- display: flex; ~ Makes current container flex container and all chidren of this container a flex item
- display: inline-block; ~ Width & Height respcted adds whole block to line of text

### ~ justify-content ~
- horizontal x axis alignment 
- justify-content: center; ~ This line will align the flex container within th bounds of the allowed space
- justify-content: flex-end/start; ~ Starts the content towards the start or end of the parent flex container 
### Example:
- (Links in menu: this was done with the help of groupng these two divs together)
- justify-content: space-between; ~ Adds space between each flex item in the container (Header)

## ~ align-items ~
- 'cross -axis' or vertical alignment, similar to justify-content
- align-items: center; items will be aigned in the center of the vertical allowed space of the flex container
### align-self (flex item alignment)
- align-self: flex-start/end ~ similar to justify or align but will single out specific flex items 
### Example:
- .social & .subscribe flex-end in the header container 

## ~ flex-wrap ~
- Changes the 'direction' of the content (photo-grid-items)
- flex-wrap: wrap; ~ Content will flow to a new lign once it reaches the edge of the page
- flex-wrap: wrap-reversed; ~ Content will stack ontop of itself when it reaches the edge of the page

## ~ flex-direction ~
- *This flips axis for justify & align*
- flex-direction: column; ~ Changes the orientation of flec items into a stack 
- flex-direction: wrap-reversed; ~ This renders iems right to left on a per row basis 
### Example:
- (row 1 starting with 3 instead of 5)

## ~ order ~
- Order changes the order of a flex item within its container without affecting other items
### Example:
- (Swapping 1 & 5 or first-item & last-item)
- order: 1; / order: -1