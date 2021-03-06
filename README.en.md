# vue-vote

#### 介绍
>一个Vue.js组件，用于创建投票、投票和显示结果。它易于实现和定制。 
>vue-vote基于vue2+

#### 安装
```
npm i vue-vote
```
#### 用法
```
<template>
    <div id="app" class="container">
      <vue-vote v-bind="options" @addvote="addVote"></vue-vote>
    </div>
</template>

data(){
        return {
          options: {
            question: "为你心中NBA球队投票",
            answers: [
              { value: 1, text: "洛杉矶湖人", votes: 53 },
              { value: 2, text: "休斯敦火箭", votes: 295 },
              { value: 3, text: "明尼苏达森林狼", votes: 30 },
              { value: 4, text: "纽约尼克斯", votes: 10 }
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

#### 效果展示：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0930/153300_39af887b_1003280.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0930/144304_30c66e03_1003280.png "屏幕截图.png")
