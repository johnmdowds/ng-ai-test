import { Component } from '@angular/core';
import { Configuration, CreateCompletionResponse, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-ai-test';
  openAiToken = environment.openAiToken;
  openAiApi: OpenAIApi;
  text: string = '';
  response: CreateCompletionResponse;

  constructor() {
    let configuration = new Configuration({
      apiKey: environment.openAiToken
    });
    this.openAiApi = new OpenAIApi(configuration);
    this.response = {
      id: '',
      object: '',
      created: 1,
      model: '',
      choices: [{ text: '' }]
    };
  }

  async submitForm() {
    try {
      this.response = (await this.openAiApi.createCompletion({
        model: "text-davinci-003",
        prompt: `The text I want to complete is: ${this.text}`,
        temperature: 0.6,
      })).data;
    } catch (error) {
      console.error(error);
    }
  }
}
