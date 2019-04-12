# Pig-Latin-Translator

Pig Latin Translator
A new alien species has moved to earth and they only speak pig-latin! The president has called you and says that they need your help!

Your mission is to create a module that is capable of taking an english sentence and translating it into pig latin. We must also be able to understand what our new alien friends are saying, so the module needs to be able to convert pig-latin back to english.

TL;DR: Create a module that translates a string into Pig Latin, and is capable of translating Pig Latin back into in the native language.

How Pig Latin Works
Basically, the Pig Latin system used here works as follows:

Words that start with a vowel (A, E, I, O, U) simply have "ay" appended to the end of the word.

Examples are:
"eat" → "eat-ay"
"omelet" → "omelet-ay"
"are" → "are-ay"
Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "-ay" is appended. -('Y' is counted as a vowel in this context)

Examples are:
"pig" → "ig-pay"
"banana" → "anana-bay"
"trash" → "ash-tray"
"happy" → "appy-hay"
"duck" → "uck-day"
"glove" → "ove-glay"
Additional Requirements
Create a Git Repository for this challenge
commit often and have your commit messages be descriptive
Write tests for your function using the Mocha and Chai Libraries.
Provide test for all cases. Handle unexpected inputs, invalid arguments, etc.
