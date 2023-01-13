import { Component, Input } from '@angular/core';
import { CreateCompletionResponse } from 'openai';

@Component({
  selector: 'app-ai-text-component',
  templateUrl: './ai-text-component.component.html',
  styleUrls: ['./ai-text-component.component.css']
})
export class AiTextComponentComponent {

  @Input() response: CreateCompletionResponse = {
    id: '',
    object: '',
    created: 1,
    model: '',
    choices: [{ text: '' }]
  };

}
