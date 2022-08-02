function createObj(name, age, sex) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.sayname = function () {
    console.log("我的名字叫" + name + "我今年" + age + "岁");
  };
  return obj;
}
var lili = createObj("cc", 18, "女");
