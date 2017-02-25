/**
 * Test explicit mixin with `@extends`.
 *
 * @extends {TestExplicitMixin1}
 * @extends {TestExplicitMixin2}
 */
export default class TextExplicitMixin extends mix(TestExplicitMixin1, TestExplicitMixin2) {}

/**
 * A function that mixes two classes / objects.
 *
 * @param {object}   a - A
 * @param {object}   b - B
 *
 * @returns {object}
 */
function mix(a, b) { return Object.assign({}, a, b); }

/**
 * A super class to be mixed in...
 */
export class TestExplicitMixin1 {}

/**
 * Another super class to be mixed in...
 */
export class TestExplicitMixin2 {}
