const userInfo = {
  firstName: 'Avi',
  lastName: 'Flombaum',
  company: {
    name: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice',
  },
  friends: [
    {
      firstName: 'Nancy',
      lastName: 'Burgess',
      company: {
        name: 'Flatbook Labs',
        jobTitle: 'Developer Apprentice',
      },
    },
    {
      firstName: 'Corinna',
      lastName: 'Jackson',
      company: {
        name: 'Flatbook Labs',
        jobTitle: 'Lead Developer',
      },
    },
  ],
  projects: [
    {
      title: 'Flatbook',
      description:
        'The premier Flatiron School-based social network in the world.',
    },
    {
      title: 'Scuber',
      description:
        'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.',
    },
  ],
};

function objIterator(dictionary) {
  for (let mainKey in dictionary) {
    if (typeof dictionary[mainKey] === 'object') {
      for (let nestedKey in dictionary[mainKey]) {
        console.log(dictionary[mainKey][nestedKey]);
      }
    } else {
      console.log(dictionary[mainKey]);
    }
  }
}
// objIterator(userInfo);

function recursiveIterator(dictionary) {
  for (let key in dictionary) {
    if (typeof dictionary[key] === 'object') {
      recursiveIterator(dictionary[key]);
    } else {
      console.log(dictionary[key]);
    }
  }
}
// recursiveIterator(userInfo);

function objIter(jsObject) {
  if (Array.isArray(jsObject)) {
    for (const item of jsObject) {
      objIter(item);
    }
  } else if (typeof jsObject === 'object') {
    for (const key in jsObject) {
      objIter(jsObject[key]);
    }
  } else {
    console.log(jsObject);
  }
}

objIter(userInfo);
