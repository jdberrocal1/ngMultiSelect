import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  @Input() showAllOption:boolean;
  @Input() showSearchOption:boolean;
  @Input() options:Array<any>;
  @Input() text:string;
  @Output() onOptionSelected: EventEmitter<any> = new EventEmitter();
  filteredOptions:Array<any>;
  selectedLabel: string;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.options;
    this.selectedLabel = this.text;
  }

  clearStatusFilter() {
    this.options.forEach(filter => {
      filter.isChecked = false;
    });
    this.selectedLabel = this.text;
    this.onOptionSelected.emit(this.options);
  }

  modelChange() {
    this.selectedLabel = this.text;
    let selectedStatus = '';
    this.options.forEach(option => {
      selectedStatus += option.isChecked ? option.name + ', ' : '';
    });
    this.selectedLabel = selectedStatus.length > 0 ? selectedStatus.slice(0, -2) : this.text;
    this.onOptionSelected.emit(this.options);
  }

  search(val: any) {
    if (!val) this.filteredOptions = this.options;
    
    this.filteredOptions = this.options.filter(d => d.name.toLowerCase().indexOf(val.toLowerCase()) >= 0);
  }

  setStatusCheck(index, e) {
    e.stopPropagation();
    this.filteredOptions[index].isChecked = !this.filteredOptions[index].isChecked;
    this.modelChange();
  }
}
