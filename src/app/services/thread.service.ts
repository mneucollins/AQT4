import { Injectable, OnInit } from '@angular/core';


class DictEntry {
  folder: String;
  templates: String[];
}

//Thread directories - modify here to add a new thread or change location
const ACTIVISM: String = "./Activism";

const DICTIONARY: DictEntry[] = [{folder: ACTIVISM, templates: new Array()}];


@Injectable()
export class ThreadService {

  constructor() {
    //DICTIONARY.forEach(function(entry){
      //entry.templates = this.assembleArray(entry);
    //});


  }

  returnSlides(topic) {
    //return an array of the slide code
  }

  assembleArray(entry): void {

    location = entry.folder;

    //fileName = findFirstFile(location + "*.html"); // Find the first file matching the filter
    //while(fileName.length)
      {
      //    write(fileName);
      //    fileName = findNextFile();  // Find the next file matching the filter
      }

  }

}
