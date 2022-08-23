import React from 'react';
import { isIterable, isReactElement } from './utils';
describe('utils', () => {
    describe('isIterable', () => {
        it('should return true if passed an object with an iterator ([1,2,3])', () => {
            expect(isIterable([1, 2, 3])).toBe(true);
        });
        it('should return true if passed an object with an iterator ("hello")', () => {
            expect(isIterable('hello')).toBe(true);
        });
        it('should return false if passed a non-iterable argument (1)', () => {
            expect(isIterable(1)).toBe(false);
        });
        it('should return false if it is passed null', () => {
            expect(isIterable(null)).toBe(false);
        });
    });
    describe('isReactElement', () => {
        it('should return true if a fragment is passed to it', () => {
            expect(isReactElement(<></>)).toBe(true);
        });
        it('should return true if passed an HTML element', () => {
            expect(isReactElement(<h1>Hello world</h1>)).toBe(true);
        });
        it('should return false if passed a string', () => {
            expect(isReactElement('hello world')).toBe(false);
        });
        it('should return false if passed a number', () => {
            expect(isReactElement(123)).toBe(false);
        });
        it('should return false if passed an object', () => {
            expect(isReactElement({ key: 'hello world' })).toBe(false);
        });
    });
});
