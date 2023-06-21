var c = {
  name: 'the c object',
  log: function () {
    var self = this;
    self.name = 'updated c object';
    console.log(self);

    var setName = function (newName) {
      self.name = newName;
    };
    setName('Update again! the c object');
    console.log(self);
  },
};

c.log();
