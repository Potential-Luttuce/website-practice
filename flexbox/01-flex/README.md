# README.MD

# flexbox 01
 - https://www.internetingishard.com/html-and-css/flexbox
 - This folder follow the above link through flexbox learning items
 - Index.html is follow along with site 
 

## display: flex;

- display: flex; ~ This line of code will make the parent or 
container element display flex, making all its children
adapt the display flex to become flex items
- display: flexbox; ~ 
- display: inline-block; ~ 

### justify-content
- horizontal x axis alignment 
- justify-content: center; ~ This line will align the flex container within th bounds of the allowed space
- justify-content: flex-end/start; ~ Starts the content towards the start or end of the parent flex container (Links in menu: this was done with the help of groupng these two divs together)
- justify-content: space-between; ~ Adds space between each flex item in the container (Header)

## align-items
- 'cross -axis' or vertical alignment, similar to justify-content
- align-items: center; items will be aigned in the center of the vertical allowed space of the flex container

## flex-wrap
- Changes the 'direction' of the content (photo-grid-items)
- flex-wrap: wrap; ~ Content will flow to a new lign once it reaches the edge of the page
- flex-direction: Changes the orientation of flec items into a stack *This flips axis for justify & align*
- flecx-wrap: wrap-reversed; ~ Content will stack ontop of itself when it reaches the edge of the page