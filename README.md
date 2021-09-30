# vue-vote

#### Description
> vue-vote based on vue2+

#### Install
```
npm i vue-vote
```
#### Usage
```
<template>
    <div id="app" class="container">
      <vue-vote v-bind="options" @addvote="addVote"></vue-vote>
    </div>
</template>

data(){
        return {
          options: {
            question: "Vote for your favorite NBA team",
            answers: [
              { value: 1, text: "Los Angeles Lakers", votes: 53 },
              { value: 2, text: "Houston Rockets", votes: 295 },
              { value: 3, text: "Minnesota Timberwolves", votes: 30 },
              { value: 4, text: "New York Knicks", votes: 10 }
            ]
          }
        }
    },
    methods: {
      addVote(obj) {
        console.log("You voted " + obj.value + "!");
      },
    }
```

#### The effect：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0930/153206_89fd8af9_1003280.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0930/153216_32990900_1003280.png "屏幕截图.png")
