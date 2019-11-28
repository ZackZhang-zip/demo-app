import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.scss']
})
export class ChildNodeComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
