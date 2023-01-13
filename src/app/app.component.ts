import { Component } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
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
  response: any;

  constructor() {
    let configuration = new Configuration({
      apiKey: environment.openAiToken
    });
    this.openAiApi = new OpenAIApi(configuration);
  }

  async doSomething(text: string) {
    try {
      const response = await this.openAiApi.createCompletion({
        model: "text-davinci-003",
        prompt: this.generatePrompt(text),
        temperature: 0.6,
      });
      this.response = response;
    } catch (error) {
      console.error(error);
    }
  }

  generatePrompt(text: string) {
    return `The text I want to complete is: ${text}`;
  }

  submitForm() {
    this.doSomething(this.text);
  }

}
