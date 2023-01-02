// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

const likes = names => {
    let text = '';
    names.length > 3 ? text = `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`
                    : names.length === 3 ? text = `${names.slice(0, 2).join(', ')} and ${names[2]} like this`
                    : names.length === 2 ? text = `${names.join(' and ')} like this`
                    : names.length === 1 ? text = `${names} likes this`
                    : text = `no one likes this`
    return text
}