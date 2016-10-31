function e_names() {
    var names = new Array("Allison", "Mary", "Andrew", "Cody", "Maddie", "John", "Steve");
    var matches = new Array(names.length);
    var returnArray = new Array();

    for (i = 0; i < names.length; i++) {
    matches[i] = names[i].search(/.y|.ie/);
    }

    for (i = 0; i < matches.length; i++) {
      if (matches[i] > 0) {
        returnArray[i] = names[i];
      }
    }
    return returnArray;
}

out = e_names();

document.write(out);
