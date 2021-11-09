<template>
    <article class="article-block">
        <input type="checkbox" id="read-more" class="read-more" />
        <label for="read-more"></label>

        <main class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est erat, convallis eget justo a, facilisis vestibulum nisl. Cras nec varius diam, et pellentesque ante. Nam at lacinia eros. Nam sed dolor ac arcu pellentesque euismod. Proin pellentesque mauris in condimentum semper. Sed id odio ac tellus mollis ornare vel eu nisl. Maecenas in suscipit quam. Ut dapibus dolor ac elit molestie tempor. Ut condimentum, nisi vitae feugiat convallis, nulla ligula sodales libero, vel fermentum lectus dolor vel neque. Duis ultricies pulvinar est, at pretium orci maximus sed.</p>
            <p>Fusce et mattis diam. Fusce porttitor accumsan risus, in vulputate enim dignissim commodo. Nunc aliquet eleifend eros, sed luctus lorem ullamcorper ornare. Nullam posuere a justo et auctor. Phasellus semper accumsan lorem, ac aliquam urna commodo vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean posuere ullamcorper mattis. Pellentesque venenatis mauris dolor. Ut sollicitudin sem urna, et pretium enim malesuada nec. Mauris risus nibh, ultrices sit amet ante eu, tincidunt consequat magna.</p>
            <p>Nunc sem diam, cursus sed blandit at, iaculis quis orci. Proin ornare purus magna, ultricies pharetra ligula tincidunt sit amet. Morbi gravida vestibulum consequat. Nulla elementum ante sit amet purus lacinia facilisis. Maecenas fringilla fermentum viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere metus in orci porta, at ultrices lacus dignissim.</p>
            <p>Integer pellentesque dapibus sapien, at hendrerit massa lacinia vitae. Nunc ut gravida lectus. Vestibulum sapien elit, pharetra vitae ipsum eget, iaculis sodales ex. Nunc sit amet magna et leo bibendum eleifend id a est. Mauris quis placerat nibh. Curabitur vel elit sed sapien porta finibus at et nunc. Mauris sodales faucibus risus ac tincidunt. Nulla vitae pretium lacus. Cras sit amet feugiat nunc. Vestibulum quis porta augue. Mauris ligula erat, auctor ac ligula sed, venenatis lobortis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Praesent suscipit lacus nec dignissim interdum. Curabitur auctor quam ac augue iaculis, nec hendrerit nisl semper.</p>
            <p>Duis eu est at ex tincidunt congue. Aliquam vel interdum est. Sed elementum mauris at massa elementum consequat. Etiam vestibulum non mi sit amet cursus. Pellentesque mollis urna non dictum pretium. Mauris sit amet dignissim massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus accumsan, consectetur lorem quis, ultrices odio.</p>
        </main>
    </article>
</template>

<style>
body {
    font-family: arial;
    margin: 40px;
    background-color: #eee;
}

.article-block {
    width: 80%;
    max-width: 360px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 6px;
    position: relative;
}

.content {
    padding: 2em;
    line-height: 1.5;
    font-size: 1.2rem;
    color: #333;
    height: 400px;
    overflow: hidden;
}

.content p {
    margin-bottom: 2em;
}

.read-more {
    display: none;
}

.read-more + label {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 150px;
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        #fff 70%
    );
    pointer-events: none;
}

.read-more + label::after {
    content: "Read More";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    padding: 1em 2em;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    pointer-events: auto;
    cursor: pointer;
}

.read-more + label::after:hover {
    background-color: #000;
}

.read-more:checked ~ .content {
    height: auto;
}

.read-more:checked + label {
    display: none;
}
</style>

