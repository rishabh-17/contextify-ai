const gpt = require("../utils/gptServices.js");
const { Saved, History } = require("../models");
const axios = require("axios");
require("dotenv").config();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getContext = async (req, res) => {
  try {
    let { text, isImg, tone } = req.body;
    if (!isImg) {
      if (text?.length > 0) {
        const googleRes = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${
            process.env.GOOGLE_API_KEY
          }&cx=${process.env.CX}&q=${
            text.length > 2000 ? text?.slice(0, 2000) : text
          }`
        );
        const googleSources = googleRes?.data?.items?.slice(5);
        console.log(googleSources);
        let prompt = [
          {
            role: "user",
            content: `You are a highly advanced AI with the capability to search and provide comprehensive information on various topics. 
          For the following query, please expand your search across the world wide web and beyond the social media platforms and include relevant context from diverse and reputable sources. Ensure to cite multiple sources wherever possible.

          Query: ${text}
          
          Guidelines:
          
          Expand Searches Beyond Social Media: Look for information from news articles, academic journals, official reports, and other reputable sources.
          Provide Context: Explain the background, significance, and any relevant details that provide a deeper understanding of the topic.
          Cite Multiple Sources: Reference at least three different sources to ensure the information is well-rounded and reliable.
          Summarize Content: When dealing with content like song lyrics, poems, recipes, or creative works, provide summaries, snippets, or high-level analyses without regurgitating the content in full. Always link to the original webpage for more information.
          
          Please provide context in the following format. The context should include:
          
          Highlighted word: Identify and highlight the key phrase or word that requires context.
          Description: Provide a detailed explanation or description of the highlighted word.
          More details: Include as much of the following information as applicable:
          Who: Identify the person or group associated with the subject.
          Why: Explain the reason or significance behind the subject.
          What: Describe what the subject is or what is happening.
          How: Explain the process or method involved.
          Where: Specify the location or setting relevant to the subject.
          When: Provide the time frame or period associated with the subject.
          
          
          Provide all responses in a clear and structured format, including URLs for each source. ${googleSources} include formattedUrl, social media links or any other url in you answer as string form the json`,
          },
        ];

        if (tone === 1) {
          prompt = [
            {
              role: "user",
              content: `You are a highly advanced AI with the capability to search and provide comprehensive information on various topics. 
            For the following query, please expand your search beyond social media platforms and include relevant context from diverse and reputable sources. 
            Ensure to cite multiple sources wherever possible. Craft your response in a professional and formal tone.

            Query: ${text}
            
            Guidelines:
            
            Expand Searches Beyond Social Media: Look for information from news articles, academic journals, official reports, and other reputable sources.
            Provide Context: Explain the background, significance, and any relevant details that provide a deeper understanding of the topic.
            Cite Multiple Sources: Reference at least three different sources to ensure the information is well-rounded and reliable.
            Summarize Content: When dealing with content like song lyrics, poems, recipes, or creative works, provide summaries, snippets, or high-level analyses without regurgitating the content in full. Always link to the original webpage for more information.
            
            Please provide context in the following format. The context should include:
            
            Highlighted word: Identify and highlight the key phrase or word that requires context.
            Description: Provide a detailed explanation or description of the highlighted word.
            More details: Include as much of the following information as applicable:
            Who: Identify the person or group associated with the subject.
            Why: Explain the reason or significance behind the subject.
            What: Describe what the subject is or what is happening.
            How: Explain the process or method involved.
            Where: Specify the location or setting relevant to the subject.
            When: Provide the time frame or period associated with the subject.
            
            Provide all responses in a clear and structured format, including URLs for each source.`,
            },
          ];
        } else if (tone === 2) {
          prompt = [
            {
              role: "user",
              content: `You are a highly advanced AI with the capability to search and provide comprehensive information on various topics. 
            For the following query, please expand your search beyond social media platforms and include relevant context from diverse and reputable sources. 
            Ensure to cite multiple sources wherever possible. Craft your response in a cheeky and humorous tone.

            Query: ${text}
            
            Guidelines:
            
            Expand Searches Beyond Social Media: Look for information from news articles, academic journals, official reports, and other reputable sources.
            Provide Context: Explain the background, significance, and any relevant details that provide a deeper understanding of the topic.
            Cite Multiple Sources: Reference at least three different sources to ensure the information is well-rounded and reliable.
            Summarize Content: When dealing with content like song lyrics, poems, recipes, or creative works, provide summaries, snippets, or high-level analyses without regurgitating the content in full. Always link to the original webpage for more information.
            
            Please provide context in the following format. The context should include:
            
            Highlighted word: Identify and highlight the key phrase or word that requires context.
            Description: Provide a detailed explanation or description of the highlighted word.
            More details: Include as much of the following information as applicable:
            Who: Identify the person or group associated with the subject.
            Why: Explain the reason or significance behind the subject.
            What: Describe what the subject is or what is happening.
            How: Explain the process or method involved.
            Where: Specify the location or setting relevant to the subject.
            When: Provide the time frame or period associated with the subject.
            
            Provide all responses in a clear and structured format, including URLs for each source.`,
            },
          ];
        } else if (tone === 3) {
          prompt = [
            {
              role: "user",
              content: `You are a highly advanced AI with the capability to search and provide comprehensive information on various topics. 
            For the following query, please expand your search beyond social media platforms and include relevant context from diverse and reputable sources. 
            Ensure to cite multiple sources wherever possible. Craft your response in a conversational and engaging tone.

            Query: ${text}
            
            Guidelines:
            
            Expand Searches Beyond Social Media: Look for information from news articles, academic journals, official reports, and other reputable sources.
            Provide Context: Explain the background, significance, and any relevant details that provide a deeper understanding of the topic.
            Cite Multiple Sources: Reference at least three different sources to ensure the information is well-rounded and reliable.
            Summarize Content: When dealing with content like song lyrics, poems, recipes, or creative works, provide summaries, snippets, or high-level analyses without regurgitating the content in full. Always link to the original webpage for more information.
            
            Please provide context in the following format. The context should include:
            
            Highlighted word: Identify and highlight the key phrase or word that requires context.
            Description: Provide a detailed explanation or description of the highlighted word.
            More details: Include as much of the following information as applicable:
            Who: Identify the person or group associated with the subject.
            Why: Explain the reason or significance behind the subject.
            What: Describe what the subject is or what is happening.
            How: Explain the process or method involved.
            Where: Specify the location or setting relevant to the subject.
            When: Provide the time frame or period associated with the subject.
            
            Provide all responses in a clear and structured format, including URLs for each source.`,
            },
          ];
        } else if (tone === 4) {
          prompt = [
            {
              role: "user",
              content: `You are a highly advanced AI with the capability to search and provide comprehensive information on various topics. 
            For the following query, please expand your search beyond social media platforms and include relevant context from diverse and reputable sources. 
            Ensure to cite multiple sources wherever possible. Craft your response in an exciting and cheerful tone.

            Query: ${text}
            
            Guidelines:
            
            Expand Searches Beyond Social Media: Look for information from news articles, academic journals, official reports, and other reputable sources.
            Provide Context: Explain the background, significance, and any relevant details that provide a deeper understanding of the topic.
            Cite Multiple Sources: Reference at least three different sources to ensure the information is well-rounded and reliable.
            Summarize Content: When dealing with content like song lyrics, poems, recipes, or creative works, provide summaries, snippets, or high-level analyses without regurgitating the content in full. Always link to the original webpage for more information.
            
            Please provide context in the following format. The context should include:
            
            Highlighted word: Identify and highlight the key phrase or word that requires context.
            Description: Provide a detailed explanation or description of the highlighted word.
            More details: Include as much of the following information as applicable:
            Who: Identify the person or group associated with the subject.
            Why: Explain the reason or significance behind the subject.
            What: Describe what the subject is or what is happening.
            How: Explain the process or method involved.
            Where: Specify the location or setting relevant to the subject.
            When: Provide the time frame or period associated with the subject.
            
            Provide all responses in a clear and structured format, including URLs for each source.`,
            },
          ];
        } else if (tone === 5) {
          prompt = [
            {
              role: "user",
              content: `You are a highly advanced AI with the capability to search and provide comprehensive information on various topics. 
            For the following query, please expand your search beyond social media platforms and include relevant context from diverse and reputable sources. 
            Ensure to cite multiple sources wherever possible. Craft your response in a kid friendly tone suitable for children to understand.

            Query: ${text}
            
            Guidelines:
            
            Expand Searches Beyond Social Media: Look for information from news articles, academic journals, official reports, and other reputable sources.
            Provide Context: Explain the background, significance, and any relevant details that provide a deeper understanding of the topic.
            Cite Multiple Sources: Reference at least three different sources to ensure the information is well-rounded and reliable.
            Summarize Content: When dealing with content like song lyrics, poems, recipes, or creative works, provide summaries, snippets, or high-level analyses without regurgitating the content in full. Always link to the original webpage for more information.
            
            Please provide context in the following format. The context should include:
            
            Highlighted word: Identify and highlight the key phrase or word that requires context.
            Description: Provide a detailed explanation or description of the highlighted word.
            More details: Include as much of the following information as applicable:
            Who: Identify the person or group associated with the subject.
            Why: Explain the reason or significance behind the subject.
            What: Describe what the subject is or what is happening.
            How: Explain the process or method involved.
            Where: Specify the location or setting relevant to the subject.
            When: Provide the time frame or period associated with the subject.
            
            Provide all responses in a clear and structured format, including URLs for each source.`,
            },
          ];
        }

        openai.chat.completions
          .create({
            model: "gpt-4-turbo",
            messages: prompt,
          })
          .then((data) => {
            // console.log("data");
            // console.log(data?.choices?.[0].message);
            const newHistory = new History({
              question: text,
              answer: data?.choices?.[0]?.message?.content.replace(
                /[\/\*]/g,
                ""
              ),
              user: req.user,
            });
            newHistory.save().then((i) => {
              req.user.totalReq = req.user.totalReq - 1;
              req.user.usage = req.user.usage + 1;
              req.user.save();
              res.json({
                success: true,
                data: data?.choices?.[0]?.message?.content.replace(
                  /[\/\*]/g,
                  ""
                ),
              });
            });
          })
          .catch((err) => {
            console.log(err);
            // res.json({
            //   success: true,
            //   data: "temp solution until new api lorem By default, Tailwinds width scale is a combination of the default spacing scale as well as some additional values specific to widths.You can customize your spacing scale by editing theme.spacing or theme.extend.spacing in your tailwind.config.js file.",
            // });
            res.status(500).json({ success: false, err: err });
          });
      }
    } else {
      openai.chat.completions
        .create({
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `You are a highly advanced AI with the capability to search and provide comprehensive information on various topics. 
                For the following image, please expand your search beyond social media platforms and include relevant context from diverse and reputable sources. 
                Ensure to cite multiple sources wherever possible.
                
                Guidelines:
                
                Expand Searches Beyond Social Media: Look for information from news articles, academic journals, official reports, and other reputable sources.
                Provide Context: Explain the background, significance, and any relevant details that provide a deeper understanding of the topic.
                Cite Multiple Sources: Reference at least three different sources to ensure the information is well-rounded and reliable.
                Summarize Content: When dealing with content like song lyrics, poems, recipes, or creative works, provide summaries, snippets, or high-level analyses without regurgitating the content in full. Always link to the original webpage for more information.
                
                Please provide context in the following format. The context should include:
                
                Highlighted word: Identify and highlight the key phrase or word that requires context.
                Description: Provide a detailed explanation or description of the highlighted word.
                More details: Include as much of the following information as applicable:
                Who: Identify the person or group associated with the subject.
                Why: Explain the reason or significance behind the subject.
                What: Describe what the subject is or what is happening.
                How: Explain the process or method involved.
                Where: Specify the location or setting relevant to the subject.
                When: Provide the time frame or period associated with the subject.`,
                },
                {
                  type: "image_url",
                  image_url: {
                    url: text,
                  },
                },
              ],
            },
          ],
        })
        .then((data) => {
          const newHistory = new History({
            question: text,
            answer: data?.choices?.[0]?.message?.content.replace(/[\/\*]/g, ""),
            user: req.user,
          });
          newHistory.save().then((i) => {
            req.user.totalReq = req.user.totalReq - 1;
            req.user.usage = req.user.usage + 1;
            req.user.save();
            res.json({
              success: true,
              data: data?.choices?.[0]?.message?.content.replace(/[\/\*]/g, ""),
            });
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ success: false, err: err });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, err: "something went wrong" });
  }
};

exports.saveContext = async (req, res) => {
  try {
    let { question, answer, type } = req.body;

    const newSaved = new Saved({
      question,
      answer,
      type,
      user: req.user,
    });

    newSaved.save().then((i) => {
      res.json({ success: true, msg: "saved successfully" });
    });
  } catch (error) {
    res.json({ success: false, err: "unable to save" });
  }
};
