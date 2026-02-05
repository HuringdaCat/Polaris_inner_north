import 'package:dart_openai/dart_openai.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class OpenAIService {
  static final OpenAIService _instance = OpenAIService._internal();

  factory OpenAIService() {
    return _instance;
  }

  OpenAIService._internal() {
    OpenAI.apiKey = dotenv.env['OPENAI_API_KEY'] ?? '';
  }

  Future<String> getChatResponse(List<OpenAIChatCompletionChoiceMessageModel> history) async {
    final apiKey = dotenv.env['OPENAI_API_KEY'];
    if (apiKey == null || apiKey.isEmpty) {
      return "Error: OpenAI API key not found. Please check your .env file.";
    }

    try {
      final systemMessage = OpenAIChatCompletionChoiceMessageModel(
        content: [
          OpenAIChatCompletionChoiceMessageContentItemModel.text(
            "You are a gentle, philosophical inner companion. Your goal is to help the user reflect on their day, their dreams, and their micro-actions. You start conversations by asking how they are feeling or what is on their mind. You speak in a calm, soothing, and supportive tone. Keep your responses concise yet meaningful.",
          ),
        ],
        role: OpenAIChatMessageRole.system,
      );

      final messages = [systemMessage, ...history];

      final completion = await OpenAI.instance.chat.create(
        model: "gpt-3.5-turbo",
        messages: messages,
      );

      return completion.choices.first.message.content?.first.text ?? "I am listening...";
    } catch (e) {
      return "I'm having trouble connecting right now. Let's try again in a moment. ($e)";
    }
  }
}
