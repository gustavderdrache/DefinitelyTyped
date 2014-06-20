// Type definitions for d3.js v3
// Project: http://d3js.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov>, Alex Ford <https://github.com/gustavderdrache>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module d3 {
  /**
   * Select an element from the current document
   *
   * @param selector The CSS query to match against
   */
  export function select(selector: string): selection<any>;

  /**
   * Create a selection from a node reference (useful in event handlers).
   *
   * @param node Element reference to use
   */
  export function select(node: EventTarget): selection<any>;

  /**
   * Select all elements matching a selector from the document
   *
   * @param selector The CSS query to match against
   */
  export function selectAll(selector: string): selection<any>;

  /**
   * Create a selection from an array of node references.
   * 
   * @param nodes Array of element references to use
   */
  export function selectAll(nodes: EventTarget[]): selection<any>;

  // XXX d3.selection is really kind of a class, but d3 itself doesn't use it
  // that way
  export var selection: {
    /**
     * Returns the root selection. Equivalent to the following:
     * d3.select(document.documentElement)
     */
     (): selection<any>;

    /**
     * The prototype for all D3 selections. Can be used to add methods.
     */
    prototype: selection<any>;
  };

  /**
   * A grouped selection of nodes. The type parameter T represents the data
   * backing this selection.
   */
  interface selection<T> {
    /**
     * Selections are grouped arrays of elements.
     */
    [index: number]: EventTarget[];

    /**
     * Return the attribute value for the first node in the selection.
     *
     * @param name Attribute name to query
     */
    attr(name: string): string;

    /**
     * Set the attribute's value to a constant for all nodes in the selection.
     *
     * @param name Attribute name to set (e.g., "id" or "class")
     * @param value Value to use
     */
    attr(name: string, value: string): selection<T>;

    /**
     * Set the attribute's value to a constant for all nodes in the selection.
     *
     * @param name Attribute name to set (e.g., "x" or "width")
     * @param value Value to use
     */
    attr(name: string, value: number): selection<T>;

    /**
     * Derive an attribute value from the data bound to this selection.
     *
     * @param name Attribute name to set (e.g., "id" or "class")
     * @param value Function to compute for each bound datum
     */
    attr(name: string, value: (datum: T, index: number) => string): selection<T>;

    /**
     * Derive an attribute value from the data bound to this selection.
     *
     * @param name Attribute name to set (e.g., "x" or "width")
     * @param value Function to compute for each bound datum
     */
    attr(name: string, value: (datum: T, index: number) => number): selection<T>;

    /**
     * Set multiple properties based on key-value pairs.
     *
     * @param map Key-value pairs to use to set attributes
     */
    attr(map: {}): selection<T>; // XXX my kingdom for a union type

    /**
     * Determine if the first node in the selection has a particular class.
     *
     * @param name The class name to query
     */
    classed(name: string): boolean;

    /**
     * Unconditionally add or remove the named class for all nodes in the
     * selection.
     *
     * @param name The class name to add or remove
     * @param value A boolean: true adds the class, false removes it
     */
    classed(name: string, value: boolean): selection<T>;

    /**
     * Conditionally add or remove the named class for each node in the
     * selection.
     *
     * @param name The class name to add or remove
     * @param value A function run to determine if the class should be added or removed
     */
    classed(name: string, value: (datum: T, index: number) => boolean): selection<T>;

    /**
     * Enable or disable multiple classes en masse.
     *
     * @param map An object whose keys are classes and pairs determine if the class is added or removed
     */
    classed(map: {}): selection<T>;

    /**
     * Determine the computed style for a given CSS property for the first node
     * in the selection.
     *
     * @param name The CSS property to query
     */
    style(name: string): string;

    /**
     * Set the CSS style property to the same value for all nodes in the
     * selection.
     *
     * @param name The CSS property to set
     * @param value The CSS value
     * @param priority Either the value null (the default) or the string "important"
     */
    style(name: string, value: number, priority?: string): selection<T>;

    /**
     * Set the CSS style property to the same value for all nodes in the
     * selection.
     *
     * @param name The CSS property to set
     * @param value The CSS value
     * @param priority Either the value null (the default) or the string "important"
     */
    style(name: string, value: string, priority?: string): selection<T>;

    /**
     * Derive a CSS property's value from each node's bound data.
     *
     * @param name The CSS property to set
     * @param value A function run to determine the value of the named property
     * @param priority Either the value null (the default) or the string "important"
     */
    style(name: string, value: (datum: T, index: number) => number, priority?: string): selection<T>;

    /**
     * Derive a CSS property's value from each node's bound data.
     *
     * @param name The CSS property to set
     * @param value A function run to determine the value of the named property
     * @param priority Either the value null (the default) or the string "important"
     */
    style(name: string, value: (datum: T, index: number) => string, priority?: string): selection<T>;

    /**
     * Compute multiple CSS properties en masse.
     *
     * @param map An object whose keys represent CSS properties and values derive CSS property values
     */
    style(map: {}): selection<T>;

    /**
     * Retrieve a property from the underlying HTML element.
     *
     * @param name The property name
     */
    property(name: string): any;

    /**
     * Set a property to the same value for all nodes in the selection.
     *
     * @param name The property name
     * @param value The property's value
     */
    property(name: string, value: any): selection<T>;

    /**
     * Derive a property value from each node's bound data.
     *
     * @param name The property name
     * @param value A function run to determine the value of the named property
     */
    property(name: string, value: (datum: T, index: number) => any): selection<T>;

    /**
     * Set multiple properties en masse.
     *
     * @param map An object mapping element properties to their values.
     */
    property(map: {}): selection<T>;

    /**
     * Return the text content of the first node in the selection.
     */
    text(): string;

    /**
     * Set the text for every node in the selection.
     *
     * @param value The text content to use
     */
    text(value: string): selection<T>;

    /**
     * Derive the text from each node's bound data.
     *
     * @param value A function to determine the text of each node
     */
    text(value: (datum: T, index: number) => number): selection<T>;

    /**
     * Derive the text from each node's bound data.
     *
     * @param value A function to determine the text of each node
     */
    text(value: (datum: T, index: number) => string): selection<T>;

    /**
     * Return the `innerHTML' of the first node in the selection.
     */
    html(): string;

    /**
     * Sets the `innerHTML' for all nodes in the selection. (Only valid for
     * HTML elements, not SVG or other vocabularies.)
     *
     * @param value The HTML string to use
     */
    html(value: string): selection<T>;

    /**
     * Derives the `innerHTML' from the data bound to each node. (Only valid
     * for HTML elements, not SVG or other vocabularies.)
     *
     * @param value The function which derives HTML text
     */
    html(value: (datum: T, index: number) => string): selection<T>;

    /**
     * Appends a node with the given name (with optional namespace prefix) to
     * each element in the selection. Bound data is inherited.
     *
     * @param name The element name (e.g., "button" or "svg:rect")
     */
    append(name: string): selection<T>;

    /**
     * Derives a node reference to append to each element in the selection.
     * Bound data is inherited.
     *
     * @param element A function returning the node reference to append
     */
    append(element: (datum: T, index: number) => EventTarget): selection<T>;

    /**
     * Prepends a node with the given name (namespace prefix optional) to each
     * element in the selection. Bound data is inherited.
     *
     * @param name The element name (e.g., "button" or "svg:rect")
     */
    insert(name: string): selection<T>;

    /**
     * For each element in the selection, insert a new node with the given name
     * before the matching CSS selector. Bound data is inherited.
     *
     * @param name The element name (e.g., "button" or "svg:rect")
     * @param before A CSS selector such as ":first-child"
     */
    insert(name: string, before: string): selection<T>;

    /**
     * For each element in the selection, insert a new node with the given name
     * before the matching function. Bound data is inherited.
     *
     * @param name The element name (e.g., "button" or "svg:rect")
     * @param before A function determining which element insert ahead of
     */
    insert(name: string, before: (datum: T, index: number) => EventTarget): selection<T>;

    /**
     * Derives a node to prepend to each element in the selection. Bound data
     * is inherited.
     *
     * @param element A function returning the node reference to prepend
     */
    insert(element: (datum: T, index: number) => EventTarget): selection<T>;

    /**
     * For each element in the selection, derive a node reference to insert
     * before the matching CSS selector. Bound data is inherited.
     *
     * @param name A function returning the node reference to append
     * @param before A CSS selector such as ":first-child"
     */
    insert(name: (datum: T, index: number) => EventTarget, before: string): selection<T>;

    /**
     * For each element in the selection, derive a node reference to insert
     * before the matching function. Bound data is inherited.
     *
     * @param name A function returning the node reference to append
     * @param before A function determining which element insert ahead of
     */
    insert(name: (datum: T, index: number) => EventTarget, before: (datum: T, index: number) => EventTarget): selection<T>;

    /**
     * Removes all nodes in the selection from the document. Returns the now-detached nodes.
     */
    remove(): selection<T>;

    /**
     * Return the array of data bound to this selection.
     */
    data(): T[];

    /**
     * Join an array of data with the selection. Returns a selection augmented
     * with 'enter' and 'exit' methods, representing the new and discarded
     * elements from the join, respectively.
     *
     * @param values The array of values to join
     * @param key A function that determines how data is joined, replacing the default by-index behavior
     */
    data<U>(values: U[], key?: (datum: U, index: number) => string): selection.update<U>;

    /**
     * Derive new data to join with the selection. Most useful with
     * sub-selections: after binding a matrix to table rows, the join function
     * here can return a row to bind to each table cell. Returns a selection
     * augmented with 'enter' and 'exit' methods, representing the new and
     * discarded elements from the join, respectively.
     *
     * @param values A function that returns an array of data to join
     * @param key A function that determines how data is joined, replacing the default by-index behavior
     */
    data<U>(values: (datum: T, index: number) => U[], key?: (datum: U, index: number) => string): selection.update<U>;

    /**
     * Return the datum bound to the first node in the selection.
     */
    datum(): T;

    /**
     * Bind a datum to every node in the selection, or delete it.
     * 
     * @param value The new datum to use. If null, removes it.
     */
    datum<U>(value: U): selection<U>;

    /**
     * Derive a new datum to bind to each node in the selection.
     *
     * @param value The function to return a datum to bind (or null to clear previously-bound data).
     */
    datum<U>(value: (datum: T, index: number) => U): selection<U>;

    /**
     * Filters the selection for only those nodes matching the provided selector.
     *
     * @param selector The CSS selector to use
     */
    filter(selector: string): selection<T>;

    /**
     * Filters the selection based on a provided function.
     *
     * @param selector The filter function
     */
    filter(selector: (datum: T, index: number) => boolean): selection<T>;

    /**
     * Sorts elements based on the given comparator function.
     *
     * @param comparator A function returning a number whose sign represents the ordering of the two parameters
     */
    sort(comparator: (a: T, b: T) => number): selection<T>;

    /**
     * Re-inserts elements so that the document order matches the selection order.
     */
    order();

    /**
     * Returns the listener function (if any) for the named DOM event.
     *
     * @param type DOM event type (e.g. "click" or "keydown")
     */
    on(type: string): (datum: T, index: number) => void;

    /**
     * Registers a function to listen to a named DOM event. A null listener
     * removes any previously-registered functions. The return value of the
     * listener is ignored.
     *
     * @param type DOM event type (e.g., "click" or "keypress")
     * @param listener The function to run, or null to deregister
     * @param capture Corresponds to the DOM useCapture flag
     */
    on(type: string, listener: (datum: T, index: number) => void, capture?: boolean);

    /**
     * Begins a transition for the selection, animating changes to elements over time.
     */
    transition(): selection<T>;

    /**
     * Interrupts the current transition, if any.
     */
    interrupt(): selection<T>;

    /**
     * Create a sub-selection by finding the first descendent matching the
     * provided CSS selector for each node in the selection.
     *
     * @param selector The CSS selector
     */
    select(selector: string): selection<T>;

    /**
     * Create a sub-selection by deriving elements to bind to.
     *
     * @param selector A function returning an element reference to use in the sub-selection, or null if no matching element can be provided
     */
    select(selector: (datum: T, index: number) => EventTarget): selection<T>;

    /**
     * Create a sub-selection by finding all children matching the given CSS selector.
     *
     * @param selector The CSS selector
     */
    selectAll(selector: string): selection<T>;

    /**
     * Create a sub-selection by deriving elements to bind to.
     *
     * @param selector A function returning an array of elements
     */
    selectAll(selector: (datum: T, index: number) => EventTarget[]): selection<T>;

    /**
     * Invoke the specified function for each node in the selection
     *
     * @param func The function to process nodes
     */
    each(func: (datum: T, index: number) => void): selection<T>;

    /**
     * Invoke the specified function on the entire selection, returning the
     * selection. Used for easy method chaining.
     *
     * @param func The function to invoke on the selection
     * @param args Any additional arguments to supply to the function
     */
    call(func: (selection: selection<T>, ...args: any[]) => void, ...args: any[]): selection<T>;

    /**
     * Returns true if the selection is empty.
     */
    empty(): boolean;

    /**
     * Returns the first non-null element in the selection, or null if the selection is empty.
     */
    node(): EventTarget;

    /**
     * Returns the number of elements in the selection.
     */
    size(): number;
  }

  export module selection {
    /**
     * The type of objects returned by an update selection's enter() operator.
     */
    export interface enter<T> {
      /**
       * Appends a node with the given name (with optional namespace prefix) to
       * each element in the selection. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       */
      append(name: string): selection<T>;

      /**
       * Derives a node reference to append to each element in the selection.
       * Bound data is inherited.
       *
       * @param element A function returning the node reference to append
       */
      append(element: (datum: T, index: number) => EventTarget): selection<T>;

      /**
       * Prepends a node with the given name (namespace prefix optional) to each
       * element in the selection. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       */
      insert(name: string): selection<T>;

      /**
       * For each element in the selection, insert a new node with the given name
       * before the matching CSS selector. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       * @param before A CSS selector such as ":first-child"
       */
      insert(name: string, before: string): selection<T>;

      /**
       * For each element in the selection, insert a new node with the given name
       * before the matching function. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       * @param before A function determining which element insert ahead of
       */
      insert(name: string, before: (datum: T, index: number) => EventTarget): selection<T>;

      /**
       * Derives a node to prepend to each element in the selection. Bound data
       * is inherited.
       *
       * @param element A function returning the node reference to prepend
       */
      insert(element: (datum: T, index: number) => EventTarget): selection<T>;

      /**
       * For each element in the selection, derive a node reference to insert
       * before the matching CSS selector. Bound data is inherited.
       *
       * @param name A function returning the node reference to append
       * @param before A CSS selector such as ":first-child"
       */
      insert(name: (datum: T, index: number) => EventTarget, before: string): selection<T>;

      /**
       * For each element in the selection, derive a node reference to insert
       * before the matching function. Bound data is inherited.
       *
       * @param name A function returning the node reference to append
       * @param before A function determining which element insert ahead of
       */
      insert(name: (datum: T, index: number) => EventTarget, before: (datum: T, index: number) => EventTarget): selection<T>;

      /**
       * Create a sub-selection by deriving elements to bind to.
       *
       * @param selector A function returning an element reference to use in the sub-selection, or null if no matching element can be provided
       */
      select(selector: (datum: T, index: number) => EventTarget): selection<T>;

      /**
       * Invoke the specified function on the entire selection, returning the
       * selection. Used for easy method chaining.
       *
       * @param func The function to invoke on the selection
       * @param args Any additional arguments to supply to the function
       */
      call(func: (selection: enter<T>, ...args: any[]) => void, ...args: any[]): enter<T>;

      /**
       * Returns true if no elements need to be created as a result of this data join.
       */
      empty(): boolean;
    }

    /**
     * A selection augmented with 'enter' and 'exit' operators. 
     */
    export interface update<T> {
      /**
       * Returns an object representing the nodes that are to be created as a
       * result of the data join.
       */
      enter(): enter<T>;

      /**
       * Returns the selection representing the nodes that are to be deleted as
       * a result of the data join.
       */
      exit(): selection<T>;

      /**
       * Return the attribute value for the first node in the selection.
       *
       * @param name Attribute name to query
       */
      attr(name: string): string;

      /**
       * Set the attribute's value to a constant for all nodes in the selection.
       *
       * @param name Attribute name to set (e.g., "id" or "class")
       * @param value Value to use
       */
      attr(name: string, value: string): update<T>;

      /**
       * Set the attribute's value to a constant for all nodes in the selection.
       *
       * @param name Attribute name to set (e.g., "x" or "width")
       * @param value Value to use
       */
      attr(name: string, value: number): update<T>;

      /**
       * Derive an attribute value from the data bound to this selection.
       *
       * @param name Attribute name to set (e.g., "id" or "class")
       * @param value Function to compute for each bound datum
       */
      attr(name: string, value: (datum: T, index: number) => string): update<T>;

      /**
       * Derive an attribute value from the data bound to this selection.
       *
       * @param name Attribute name to set (e.g., "x" or "width")
       * @param value Function to compute for each bound datum
       */
      attr(name: string, value: (datum: T, index: number) => number): update<T>;

      /**
       * Set multiple properties based on key-value pairs.
       *
       * @param map Key-value pairs to use to set attributes
       */
      attr(map: {}): update<T>; // XXX my kingdom for a union type

      /**
       * Determine if the first node in the selection has a particular class.
       *
       * @param name The class name to query
       */
      classed(name: string): boolean;

      /**
       * Unconditionally add or remove the named class for all nodes in the
       * selection.
       *
       * @param name The class name to add or remove
       * @param value A boolean: true adds the class, false removes it
       */
      classed(name: string, value: boolean): update<T>;

      /**
       * Conditionally add or remove the named class for each node in the
       * selection.
       *
       * @param name The class name to add or remove
       * @param value A function run to determine if the class should be added or removed
       */
      classed(name: string, value: (datum: T, index: number) => boolean): update<T>;

      /**
       * Enable or disable multiple classes en masse.
       *
       * @param map An object whose keys are classes and pairs determine if the class is added or removed
       */
      classed(map: {}): update<T>;

      /**
       * Determine the computed style for a given CSS property for the first node
       * in the selection.
       *
       * @param name The CSS property to query
       */
      style(name: string): string;

      /**
       * Set the CSS style property to the same value for all nodes in the
       * selection.
       *
       * @param name The CSS property to set
       * @param value The CSS value
       * @param priority Either the value null (the default) or the string "important"
       */
      style(name: string, value: number, priority?: string): update<T>;

      /**
       * Set the CSS style property to the same value for all nodes in the
       * selection.
       *
       * @param name The CSS property to set
       * @param value The CSS value
       * @param priority Either the value null (the default) or the string "important"
       */
      style(name: string, value: string, priority?: string): update<T>;

      /**
       * Derive a CSS property's value from each node's bound data.
       *
       * @param name The CSS property to set
       * @param value A function run to determine the value of the named property
       * @param priority Either the value null (the default) or the string "important"
       */
      style(name: string, value: (datum: T, index: number) => number, priority?: string): update<T>;

      /**
       * Derive a CSS property's value from each node's bound data.
       *
       * @param name The CSS property to set
       * @param value A function run to determine the value of the named property
       * @param priority Either the value null (the default) or the string "important"
       */
      style(name: string, value: (datum: T, index: number) => string, priority?: string): update<T>;

      /**
       * Compute multiple CSS properties en masse.
       *
       * @param map An object whose keys represent CSS properties and values derive CSS property values
       */
      style(map: {}): update<T>;

      /**
       * Retrieve a property from the underlying HTML element.
       *
       * @param name The property name
       */
      property(name: string): any;

      /**
       * Set a property to the same value for all nodes in the selection.
       *
       * @param name The property name
       * @param value The property's value
       */
      property(name: string, value: any): update<T>;

      /**
       * Derive a property value from each node's bound data.
       *
       * @param name The property name
       * @param value A function run to determine the value of the named property
       */
      property(name: string, value: (datum: T, index: number) => any): update<T>;

      /**
       * Set multiple properties en masse.
       *
       * @param map An object mapping element properties to their values.
       */
      property(map: {}): update<T>;

      /**
       * Return the text content of the first node in the selection.
       */
      text(): string;

      /**
       * Set the text for every node in the selection.
       *
       * @param value The text content to use
       */
      text(value: string): update<T>;

      /**
       * Derive the text from each node's bound data.
       *
       * @param value A function to determine the text of each node
       */
      text(value: (datum: T, index: number) => number): update<T>;

      /**
       * Derive the text from each node's bound data.
       *
       * @param value A function to determine the text of each node
       */
      text(value: (datum: T, index: number) => string): update<T>;

      /**
       * Return the `innerHTML' of the first node in the selection.
       */
      html(): string;

      /**
       * Sets the `innerHTML' for all nodes in the selection. (Only valid for
       * HTML elements, not SVG or other vocabularies.)
       *
       * @param value The HTML string to use
       */
      html(value: string): update<T>;

      /**
       * Derives the `innerHTML' from the data bound to each node. (Only valid
       * for HTML elements, not SVG or other vocabularies.)
       *
       * @param value The function which derives HTML text
       */
      html(value: (datum: T, index: number) => string): update<T>;

      /**
       * Appends a node with the given name (with optional namespace prefix) to
       * each element in the selection. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       */
      append(name: string): update<T>;

      /**
       * Derives a node reference to append to each element in the selection.
       * Bound data is inherited.
       *
       * @param element A function returning the node reference to append
       */
      append(element: (datum: T, index: number) => EventTarget): update<T>;

      /**
       * Prepends a node with the given name (namespace prefix optional) to each
       * element in the selection. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       */
      insert(name: string): update<T>;

      /**
       * For each element in the selection, insert a new node with the given name
       * before the matching CSS selector. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       * @param before A CSS selector such as ":first-child"
       */
      insert(name: string, before: string): update<T>;

      /**
       * For each element in the selection, insert a new node with the given name
       * before the matching function. Bound data is inherited.
       *
       * @param name The element name (e.g., "button" or "svg:rect")
       * @param before A function determining which element insert ahead of
       */
      insert(name: string, before: (datum: T, index: number) => EventTarget): update<T>;

      /**
       * Derives a node to prepend to each element in the selection. Bound data
       * is inherited.
       *
       * @param element A function returning the node reference to prepend
       */
      insert(element: (datum: T, index: number) => EventTarget): update<T>;

      /**
       * For each element in the selection, derive a node reference to insert
       * before the matching CSS selector. Bound data is inherited.
       *
       * @param name A function returning the node reference to append
       * @param before A CSS selector such as ":first-child"
       */
      insert(name: (datum: T, index: number) => EventTarget, before: string): update<T>;

      /**
       * For each element in the selection, derive a node reference to insert
       * before the matching function. Bound data is inherited.
       *
       * @param name A function returning the node reference to append
       * @param before A function determining which element insert ahead of
       */
      insert(name: (datum: T, index: number) => EventTarget, before: (datum: T, index: number) => EventTarget): update<T>;

      /**
       * Removes all nodes in the selection from the document. Returns the now-detached nodes.
       */
      remove(): update<T>;

      /**
       * Return the array of data bound to this selection.
       */
      data(): T[];

      /**
       * Join an array of data with the selection. Returns a selection augmented
       * with 'enter' and 'exit' methods, representing the new and discarded
       * elements from the join, respectively.
       *
       * @param values The array of values to join
       * @param key A function that determines how data is joined, replacing the default by-index behavior
       */
      data<U>(values: U[], key?: (datum: U, index: number) => string): selection.update<U>;

      /**
       * Derive new data to join with the selection. Most useful with
       * sub-selections: after binding a matrix to table rows, the join function
       * here can return a row to bind to each table cell. Returns a selection
       * augmented with 'enter' and 'exit' methods, representing the new and
       * discarded elements from the join, respectively.
       *
       * @param values A function that returns an array of data to join
       * @param key A function that determines how data is joined, replacing the default by-index behavior
       */
      data<U>(values: (datum: T, index: number) => U[], key?: (datum: U, index: number) => string): update<U>;

      /**
       * Return the datum bound to the first node in the selection.
       */
      datum(): T;

      /**
       * Bind a datum to every node in the selection, or delete it.
       * 
       * @param value The new datum to use. If null, removes it.
       */
      datum<U>(value: U): update<U>;

      /**
       * Derive a new datum to bind to each node in the selection.
       *
       * @param value The function to return a datum to bind (or null to clear previously-bound data).
       */
      datum<U>(value: (datum: T, index: number) => U): update<U>;

      /**
       * Filters the selection for only those nodes matching the provided selector.
       *
       * @param selector The CSS selector to use
       */
      filter(selector: string): update<T>;

      /**
       * Filters the selection based on a provided function.
       *
       * @param selector The filter function
       */
      filter(selector: (datum: T, index: number) => boolean): update<T>;

      /**
       * Sorts elements based on the given comparator function.
       *
       * @param comparator A function returning a number whose sign represents the ordering of the two parameters
       */
      sort(comparator: (a: T, b: T) => number): update<T>;

      /**
       * Re-inserts elements so that the document order matches the selection order.
       */
      order();

      /**
       * Returns the listener function (if any) for the named DOM event.
       *
       * @param type DOM event type (e.g. "click" or "keydown")
       */
      on(type: string): (datum: T, index: number) => void;

      /**
       * Registers a function to listen to a named DOM event. A null listener
       * removes any previously-registered functions. The return value of the
       * listener is ignored.
       *
       * @param type DOM event type (e.g., "click" or "keypress")
       * @param listener The function to run, or null to deregister
       * @param capture Corresponds to the DOM useCapture flag
       */
      on(type: string, listener: (datum: T, index: number) => void, capture?: boolean);

      /**
       * Begins a transition for the selection, animating changes to elements over time.
       */
      transition(): transition<T>;

      /**
       * Interrupts the current transition, if any.
       */
      interrupt(): update<T>;

      /**
       * Create a sub-selection by finding the first descendent matching the
       * provided CSS selector for each node in the selection.
       *
       * @param selector The CSS selector
       */
      select(selector: string): update<T>;

      /**
       * Create a sub-selection by deriving elements to bind to.
       *
       * @param selector A function returning an element reference to use in the sub-selection, or null if no matching element can be provided
       */
      select(selector: (datum: T, index: number) => EventTarget): update<T>;

      /**
       * Create a sub-selection by finding all children matching the given CSS selector.
       *
       * @param selector The CSS selector
       */
      selectAll(selector: string): update<T>;

      /**
       * Create a sub-selection by deriving elements to bind to.
       *
       * @param selector A function returning an array of elements
       */
      selectAll(selector: (datum: T, index: number) => EventTarget[]): update<T>;

      /**
       * Invoke the specified function for each node in the selection
       *
       * @param func The function to process nodes
       */
      each(func: (datum: T, index: number) => void): update<T>;

      /**
       * Invoke the specified function on the entire selection, returning the
       * selection. Used for easy method chaining.
       *
       * @param func The function to invoke on the selection
       * @param args Any additional arguments to supply to the function
       */
      call(func: (selection: update<T>, ...args: any[]) => void, ...args: any[]): update<T>;

      /**
       * Returns true if the selection is empty.
       */
      empty(): boolean;

      /**
       * Returns the first non-null element in the selection, or null if the selection is empty.
       */
      node(): EventTarget;

      /**
       * Returns the number of elements in the selection.
       */
      size(): number;
    }
  }

  // XXX d3.transition, like d3.selection is only sort of class-like
  export var transition: {
    /**
     * Create an animated transition. Equivalent to d3.select(document).transition().
     */
    (): transition<any>;

    /**
     * Derive an animated transition from the specified selection.
     *
     * @param selection The selection to animate
     */
    <T>(selection: selection<T>): transition<T>;

    /**
     * The prototype of all D3 transitions.
     */
    prototype: transition<any>;
  }

  /**
   * A type of selection which animates changes to attributes and values over
   * time.
   */
  export interface transition<T> {
    /**
     * Returns the delay bound to the first node in the transition.
     */
    delay(): number;

    /**
     * Set the transition to a fixed number of milliseconds.
     *
     * @param delay The number of milliseconds to delay the transition
     */
    delay(delay: number): transition<T>;

    /**
     * Derives a delay on a per-node basis.
     *
     * @param delay A function that returns the number of milliseconds by which to delay this node's animation
     */
    delay(delay: (datum: T, index: number) => number): transition<T>;

    /**
     * Returns the duration (in milliseconds) of the animation for the first node in the transition.
     */
    duration(): number;

    /**
     * Sets the duration of the animation to a fixed number of milliseconds.
     *
     * @param duration The number of milliseconds to use as the transition duration
     */
    duration(duration: number): transition<T>;

    /**
     * Derives a per-node duration based on bound data.
     *
     * @param duration A function that returns the duration (in milliseconds) of this transition
     */
    duration(duration: (datum: T, index: number) => number): transition<T>;

    /**
     * Returns the easing function for this transition
     */
    ease(): (t: number) => number;

    /**
     * Sets the easing function for this transition to one of the named functions known to `d3.ease'.
     *
     * @param value A named easing function
     * @param args Additional arguments passed to d3.ease
     */
    ease(value: string, ...args: any[]): transition<T>;

    /**
     * Sets the easing function to a custom function. This function accepts a
     * parameter 0 <= t <= 1 and returns a value in the range [0, 1].
     *
     * @param value A custom easing function
     */
    ease(value: (t: number) => number): transition<T>;

    /**
     * Smoothly transitions each node's attribute to the specified value.
     *
     * @param name The attribute name (e.g., x or width)
     * @param value The attribute's value
     */
    attr(name: string, value: number): transition<T>;

    /**
     * Smoothly transitions each node's attribute to the specified value.
     *
     * @param name The attribute name (e.g., transform)
     * @param value The attribute's value
     */
    attr(name: string, value: string): transition<T>;

    /**
     * Derives an attribute value on a per-node basis. The new value, if
     * different from the present one, will be animated to over time.
     *
     * @param name The attribute name (e.g., x or width)
     * @param value A function used to derive the new attribute value
     */
    attr(name: string, value: (datum: T, index: number) => number): transition<T>;

    /**
     * Derives an attribute value on a per-node basis. The new value, if
     * different from the present one, will be animated to over time.
     *
     * @param name The attribute name (e.g., transform)
     * @param value A function used to derive the new attribute value
     */
    attr(name: string, value: (datum: T, index: number) => string): transition<T>;

    /**
     * Animate multiple attribute values en masse. Keys represent attribute
     * names, and values are either constants or functions over bound data.
     *
     * @param map A mapping of attribute names to values.
     */
    attr(map: {}): transition<T>;

    /**
     * Derive a custom tweening function based on bound data and the named
     * attribute's current value.
     *
     * The return value is an interpolator which takes a value 0 <= t <= 1 and
     * returns an interpolated string value.
     * 
     * @param name The attribute name
     * @param tween A function which derives an interpolator from bound data and the attribute's value.
     */
    attrTween(name: string, tween: (datum: T, index: number, value: string) => (t: number) => string): transition<T>;

    /**
     * Transition to a new CSS property value.
     *
     * @param name The CSS property name
     * @param value The CSS property's value
     * @param priority Either null or the string "important"
     */
    style(name: string, value: number, priority?: string): transition<T>;

    /**
     * Transition to a new CSS property value.
     *
     * @param name The CSS property name
     * @param value The CSS property's value
     * @param priority Either null or the string "important"
     */
    style(name: string, value: string, priority?: string): transition<T>;

    /**
     * Derive a new CSS property value to transition to, based on bound data.
     *
     * @param name The CSS property name
     * @param value A function to derive a new CSS property value
     * @param priority Either null or the string "important"
     */
    style(name: string, value: (datum: T, index: number) => number, priority?: string): transition<T>;

    /**
     * Derive a new CSS property value to transition to, based on bound data.
     *
     * @param name The CSS property name
     * @param value A function to derive a new CSS property value
     * @param priority Either null or the string "important"
     */
    style(name: string, value: (datum: T, index: number) => string, priority?: string): transition<T>;

    /**
     * Derive a custom tweening function based on bound data and the named
     * property's current value.
     *
     * The return value is an interpolator which takes a value 0 <= t <= 1 and
     * returns an interpolated string value.
     * 
     * @param name The attribute name
     * @param tween A function which derives an interpolator from bound data and the attribute's value.
     * @param priority Either null or the string "important"
     */
    styleTween(name: string, tween: (datum: T, index: number, value: string) => (t: number) => string, priority?: string): transition<T>;

    /**
     * Register a custom tween function. The factory is called for each element
     * at the start of the transition and returns a function to be called
     * repeatedly. If the factory instead returns null, no tween will run for
     * the node.
     *
     * @param name The name by which to register this tween
     * @param factory A factory function returning a tween run over time
     */
    tween(name: string, factory: (datum: T, index: number) => (t: number) => void): transition<T>;

    /**
     * Schedules the removal of the elements when the transition ends. If a new
     * transition is created, the nodes will not be removed.
     */
    remove(): transition<T>;

    /**
     * Create a sub-transition by selecting a child element matching the given
     * CSS selector. Operates like the 'select' method on selections.
     *
     * @param selector A CSS selector
     */
    select(selector: string): transition<T>;

    /**
     * Derive a sub-transition by returning a node reference to bind to.
     *
     * @param selector A function returning an element reference (or null if no matching element can be found)
     */
     select(selector: (datum: T, index: number) => EventTarget): transition<T>;

    /**
     * Create a sub-transition by selecting all children matching the given CSS
     * selector.
     *
     * @param selector A CSS selector
     */
    selectAll(selector: string): transition<T>;

    /**
     * Derive a sub-transition by returning an array of node references to bind to
     *
     * @param selector A function returning an array of nodes
     */
    selectAll(selector: (datum: T, index: number) => EventTarget[]): transition<T>;

    /**
     * Filters the transition: only those nodes which match the provided CSS
     * selector are retained.
     *
     * @param selector A CSS selector
     */
    filter(selector: string): transition<T>;

    /**
     * Filters the transition: nodes are retained if the given filter function
     * returns true.
     *
     * @param selector A filter function
     */
    filter(selector: (datum: T, index: number) => boolean): transition<T>;

    /**
     * Invokes the function for each node in the transition, passing in bound data.
     *
     * @param listener The function to run on each node
     */
    each(listener: (datum: T, index: number) => void): transition<T>;

    /**
     * Listens for the start or end events of transitions; these are fired when
     * the transitions begin and complete, respectively.
     *
     * @param type One of "start" or "end"
     * @param listener The handler to run on the event
     */
    each(type: string, listener: (datum: T, index: number) => void): transition<T>;

    /**
     * Call a function on this transition. transition.call(f) is roughly
     * equivalent to f(transition), except that method chaining is preserved.
     *
     * @param func The function to invoke on the transition 
     * @param args Any additional arguments to supply to the function
     */
    call(func: (transition: transition<T>, ...args: any[]) => void, ...args: any[]): transition<T>;

    /**
     * Returns true if the transition is empty.
     */
    empty(): boolean;

    /**
     * Returns the first element in the transition. If the transition is empty, returns null.
     */
    node(): EventTarget;

    /**
     * Returns the number of elements in the transition.
     */
    size(): number;
  }

  /**
   * Stores the current event, if any. Only usable inside a handler registered
   * with the 'on' method of selections.
   */
  export var event: Event;

  /**
   * Returns the x- and y- coordinates of d3.event relative to the given container.
   * The coordinates are returned as the array [x, y].
   *
   * @param container A container element such as svg:g or svg:svg.
   */
  export function mouse(container: EventTarget): number[];

  /**
   * Returns the x- and y- coordinates of the touch matching the specified
   * identifier and relative to the given container. The touch list queried is
   * d3.event's changedTouches property.
   *
   * The coordinates are returned as an array like [[x1, y1], [x2, y2]].
   *
   * @param container A container element such as svg:g or svg:svg
   * @param identifier The touch identifier to match against
   */
  export function touches(container: EventTarget, identifier: number): number[][];

  /**
   * Returns the x- and y- coordinates of the touch matching the specified
   * identifier and relative to the given container. The touch list examined is
   * provided.
   *
   * The coordinates are returned as an array like [[x1, y1], [x2, y2]].
   *
   * @param container A container element such as svg:g or svg:svg
   * @param touches The touch list to examine
   * @param identifier The touch identifier to match against
   */
  export function touches(container: EventTarget, touches: TouchList, identifier: number): number[][];

  /**
   * Returns the x- and y- coordinates of each associated with the given touch list,
   * relative to the given container. The coordinates are returned as an array with
   * a structure like so: [[x1, y1], [x2, y2]].
   *
   * @param container A container element such as svg:g or svg:svg
   * @param touches A touch list (defaults to d3.event's touches property)
   */
  export function touches(container: EventTarget, touches?: TouchList): number[][];

  /**
   * A comparator function for natural ordering of values.
   *
   * @param a The first value to compare
   * @param b The second value to compare
   */
  export function ascending<T>(a: T, b: T): number;

  /**
   * A comparator function for reverse natural ordering of values.
   *
   * @param a The first value to compare
   * @param b The second value to compare
   */
  export function descending<T>(a: T, b: T): number;

  /**
   * Returns the minimum value in the array. Ignores undefined values.
   *
   * @param array The array of values to inspect
   */
  export function min<T>(array: T[]): T;

  /**
   * Returns the minimum value in the array after projection.
   *
   * @param array The array of values to inspect
   * @param accessor An accessor function to project values
   */
  export function min<T, U>(array: T[], accessor: (value: T) => U): U;

  /**
   * Returns the maximum value in the array. Ignores undefined values.
   *
   * @param array The array of values to inspect
   */
  export function max<T>(array: T[]): T;

  /**
   * Returns the maximum value in the array after projection.
   *
   * @param array The array of values to inspect
   * @param accessor An accessor function to project values
   */
  export function max<T, U>(array: T[], accessor: (value: T) => U): U;

  /**
   * Returns the minimum and maximum values in the array. Equivalent to calling
   * d3.min and d3.max simultaneously.
   *
   * @param array The array of values to inspect
   */
  export function extent<T>(array: T[]): T[];

  /**
   * Returns the minimum and maximum values in the array. Equivalent to calling
   * d3.min and d3.max simultaneously with the provided accessor.
   *
   * @param array The array of values to inspect
   * @param accessor An accessor function to project values
   */
  export function extent<T, U>(array: T[], accessor: (value: T) => U): U[];

  /**
   * Returns the mean of the array. Ignores NaN and undefined.
   *
   * @param array The array of numbers
   */
  export function mean(array: number[]): number;

  /**
   * Returns the mean of the array based on the provided accessor.
   *
   * @param array The array
   * @param accessor An accessor function
   */
  export function mean<T>(array: T[], accessor: (value: T) => number): number;

  /**
   * Computes the median of the given array.
   *
   * @param array The array of numbers
   */
  export function median(array: number[]): number;

  /**
   * Computes the median of the given array after applying the accessor.
   *
   * @param array The array of values
   * @param accessor An accessor function
   */
  export function median<T>(array: T[], accessor: (value: T) => number): number;

  /**
   * Returns the p-quantile of the given sorted array of numbers. The median
   * can be found with a p of 0.5, and the first quartile corresponds to a p of 0.25
   *
   * @param numbers An array of numbers; this must be sorted
   * @param p A number in the range [0, 1]
   */
  export function quantile(numbers: number[], p: number): number;

  /**
   * Locates the insertion point for the value X to maintain sorted order. The
   * return value is suitable for a first argument to the 'splice' method on
   * arrays.
   *
   * @param array The sorted array of values
   * @param x The value to insert
   * @param lo The optional lower bound to consider
   * @param hi The optional upper bound to consider
   */
  export function bisectLeft<T>(array: T[], x: T, lo?: number, hi?: number): number;

  /**
   * Like d3.bisectLeft, this locates the insertion point for the value X to
   * maintain sorted order. Unlike d3.bisectLeft, this considers the right end
   * of the array.
   *
   * @param array The sorted array of values
   * @param x The value to insert
   * @param lo The optional lower bound to consider
   * @param hi The optional upper bound to consider
   */
  export function bisect<T>(array: T[], x: T, lo?: number, hi?: number): number;

  /**
   * Like d3.bisectLeft, this locates the insertion point for the value X to
   * maintain sorted order. Unlike d3.bisectLeft, this considers the right end
   * of the array.
   *
   * @param array The sorted array of values
   * @param x The value to insert
   * @param lo The optional lower bound to consider
   * @param hi The optional upper bound to consider
   */
  export function bisectRight<T>(array: T[], x: T, lo?: number, hi?: number): number;

  /**
   * Returns a pair of bisectors for the given comparison function. These
   * bisectors are equivalent to bisectLeft and bisectRight.
   *
   * @param comparator A function of two values returning a numeric comparison value
   */
  export function bisector<T>(comparator: (a: T, b: T) => number): {
    left: (array: T[], x: T, lo?: number, hi?: number) => number;
    right: (array: T[], x: T, lo?: number, hi?: number) => number;
  };

  /**
   * Returns a pair of bisectors for the given accessor. These bisectors are
   * equivalent to bisectLeft and bisectRight.
   *
   * @param accessor A single-argument accessor function
   */
  export function bisector<T, U>(accessor: (value: T) => U): {
    left: (array: T[], x: T, lo?: number, hi?: number) => number;
    right: (array: T[], x: T, lo?: number, hi?: number) => number;
  };

  /**
   * Randomizes the order of the array.
   *
   * @param array The array to reorder
   */
  export function shuffle<T>(array: T[]): void;


  /**
   * Returns an array of property names for the given object.
   *
   * @param object The object whose properties are returned
   */
  export function keys(object: Object): string[];

  /**
   * Returns an array of values for the provided object.
   *
   * @param object An object whose property values are examined
   */
  export function values(object: Object): any[];

  /**
   * Returns an array of objects containing each property's name and value.
   *
   * @param object An object whose properties are examined
   */
  export function entries(object: Object): { key: string; value: any }[];

  /**
   * Constructs a new, empty map object.
   */
  export function map<T>(): map<T>;

  /**
   * Constructs a new map object pre-filled with the object's property names
   * and values.
   *
   * @param object An object whose enumerable keys and values will be used to fill the map.
   */
  export function map<T>(object: {[param: string]: T}): map<T>;

  /**
   * Constructs a new map object pre-filled with the object's property names
   * and values.
   *
   * @param object An object whose enumerable keys and values will be used to fill the map.
   */
  export function map<T>(object: {[param: number]: T}): map<T>;

  /**
   * Constructs a new map object pre-filled with the object's property names
   * and values.
   *
   * @param object An object whose enumerable keys and values will be used to fill the map.
   */
  export function map<T>(object: Object): map<any>;


  /**
   * A shim for ES6 map objects. Unlike ES6 maps, this map uses strings for keys.
   */
  export interface map<T> {
    /**
     * Returns true if this map contains a value for the given key.
     *
     * @param key The entry name
     */
    has(key: string): boolean;

    /**
     * Returns the value for the specified key string. Returns undefined if
     * there is no value.
     *
     * @param key The entry name
     */
    get(key: string): T;

    /**
     * Sets the value for the specified key string. Existing values are
     * replaced. Returns the new value.
     *
     * @param key The entry name
     * @param value The value to store under the key
     */
    set(key: string, value: T): T;

    /**
     * Removes the entry named by key. Returns true if an entry was removed, or
     * false if no entry named by key existed.
     *
     * @param key The entry name
     */
    remove(key: string): boolean;

    /**
     * Returns a list of keys stored in this map.
     */
    keys(): string[];

    /**
     * Returns all values stored in this map.
     */
    values(): T[];

    /**
     * Returns an array of objects, each with a key and value property.
     */
    entries(): { key: string, value: T }[];

    /**
     * Calls the given function for each entry in the map. The function
     * receives the key and value of each entry.
     *
     * @param func The iterator function
     */
    forEach(func: (key: string, value: T) => void): void;

    /**
     * Returns true if the map has no entries.
     */
    empty(): boolean;

    /**
     * Returns the number of entries in the map.
     */
    size(): number;
  }

  /**
   * Constructs a set. If an array is provided, the set is pre-filled with values.
   *
   * @param array An array of strings to insert into the set
   */
  export function set(array?: string[]): set;

  /**
   * A shim for ES6 set objects. Unlike ES6 sets, all values are strings.
   */
  export interface set {
    /**
     * Returns true if the value string is stored in the set.
     *
     * @param value The value string
     */
    has(value: string): boolean;

    /**
     * Adds the given value string to the set. Returns the inserted value.
     *
     * @param value The value string to add
     */
    add(value: string): string;

    /**
     * Removes the given value from the set. Returns true if an entry was found
     * and removed, false if no entry existed.
     *
     * @param value The value string to remove
     */
    remove(value: string): boolean;

    /**
     * Returns all values stored in the set.
     */
    values(): string[];

    /**
     * Calls the given function over each value in the set. The function is
     * given each value as its first argument.
     *
     * @param func The iterator function
     */
    forEach(func: (value: string) => void): void;

    /**
     * Returns true if no value is stored in this set.
     */
    empty(): boolean;

    /**
     * Returns the number of values in this set.
     */
    size(): string;
  }

  /**
   * Merges the specified arrays into a single array. Behaves similar to
   * Array's concat method.
   *
   * @param arrays An array of arrays to merge
   */
  export function merge<T>(arrays: T[][]): T[];

  /**
   * Generates an array of numbers starting from 0 and containing every
   * n * step items until 'stop' is reached.
   *
   * @param stop The ending value
   * @param step The step size. Defaults to 1.
   */
  export function range(stop: number, step?: number): number[];

  /**
   * Generates an array of numbers starting with 'start' and containing every
   * n * step items until 'stop' is reached.
   *
   * @param start The starting value
   * @param stop The ending value
   * @param step The step size. Defaults to 1.
   */
  export function range(start: number, stop: number, step?: number): number[];

  /**
   * Permutes the array using the array of indexes provided. Can be used to extract
   * a subset of data from the given array. Indexes may be repeated.
   *
   * @param array The array (or array-like structure) from which to obtain values
   * @param indexes The array of indexes to use
   */
  export function permute<T>(array: {[param: number]: T}, indexes: number[]): T[];

  /**
   * Obtains an array of data based on the provided array of keys. Indexes may
   * be repeated, and the array does not need to have the same number of
   * elements as the object has keys. This allows for extraction of a subset of data.
   *
   * @param object An object whose values will be returned
   * @param indexes An array of indexes
   */
  export function permute<T>(object: {[param: string]: T}, indexes: string[]): T[];

  /**
   * Returns an array of arrays. The i'th array contains the i'th element of
   * the provided arrays.
   *
   * @param arrays The arrays to zip. If none are provided, the resulting array is empty.
   */
  export function zip<T>(...arrays: T[]): T[][];

  /**
   * Equivalent to applying d3.zip to the provided matrix.
   *
   * @param matrix The matrix to transpose.
   */
  export function transpose<T>(matrix: T[][]): T[][];

  /**
   * Creates a nest operator.
   */
  export function nest<T>(): nest<T>;

  export interface nest<T> {
    /**
     * Registers a new key function. Creates a new level of hierarchy.
     *
     * @param func A function to determine a new key. Usually a simple accessor.
     */
    key(func: (datum: T) => string): nest<T>;

    /**
     * Determines how to sort the return values of the most recently-registered
     * key function. This function only applies when using the 'entries' method.
     *
     * @param comparator A two-argument function to compare values, such as d3.ascending.
     */
    sortKeys(comparator: (a: string, b: string) => number): nest<T>;

    /**
     * Sorts leaf elements using the specified comparator.
     *
     * @param comparator A two-argument function to compare values
     */
    sortValues(comparator: (a: T, b: T) => number): nest<T>;

    /**
     * Specifies a rollup function. This replaces the array of leaf values in
     * the results of 'map' and 'entries'.
     *
     * @param func The rollup function
     */
    rollup(func: (values: T[]) => any);

    /**
     * Applies the nest operator to the given array of values. The returned
     * object has keys for each level of hierarchy.
     *
     * @param array The values to nest
     */
    map(array: T[]): {[param: string]: any};

    /**
     * Applies the nest operator to the given array of values. The returned
     * map object has keys corresponding to the first key function, and a
     * hierarchy corresponding to the registered functions.
     *
     * @param array The values to nest
     * @param mapType The constructor for the nest to use.
     */
    map(array: T[], mapType: typeof d3.map): map<any>;

    /**
     * Returns an array of key-values entries. The 'values' entries are either
     * the result of the rollup function or another array of key-values entries.
     *
     * @param array The values to nest
     */
    entries(array: T[]): {key: string; values: any}[];
  }

  export module scale {
    export function linear(): linear<number>;

    export interface linear<T> {
      /**
       * Given a value x in the input domain, returns the corresponding value
       * in the output range.
       *
       * @param x The input value
       */
      (x: number): T;

      /**
       * Return the value in the input domain corresponding to the output
       * value.
       *
       * This operation is only defined on linear<number> scales.
       *
       * @param y The output value to invert
       */
      invert(y: number): number;

      /**
       * Return the input domain in use by this scale.
       */
      domain(): number[];

      /**
       * Sets the domain to the provided array of numbers.
       *
       * @param numbers The array of domain values
       */
      domain(numbers: number[]): linear<T>;

      /**
       * Returns the output range in use by this scale.
       */
      range(): T[];

      /**
       * Sets the output range to the specified array of values.
       *
       * @param values The new output range
       */
      range<U>(values: U[]): linear<U>;

      /**
       * Sets the output range to the given array of values and sets the
       * interpolator to d3.interpolateRound.
       *
       * @param values The array of numbers to use as the output range
       */
      rangeRound(values: number[]): linear<number>;

      /**
       * Returns the interpolator factory in use by this scale.
       */
      interpolate(): (a: T, b: T) => (t: number) => T;

      /**
       * Sets the interpolator factory in use by this scale to the given
       * function. The function must return a single-argument function that
       * returns a value based on an input 0 <= t <= 1.
       *
       * @param factory The interpolator factory
       */
      interpolate(factory: (a: T, b: T) => (t: number) => T): linear<T>;

      /**
       * Returns true if clamping is enabled.
       */
      clamp(): boolean;

      /**
       * Enables or disables clamping based on the parameter. Clamping implies
       * that values outside the input domain will be clamped to the largest or
       * smallest value in the output range.
       *
       * @param clamp Enables or disables clamping
       */
      clamp(clamp: boolean): linear<T>;

      /**
       * Extends the domain so that it starts and ends on "nice" values.
       *
       * @param count Allows greater control over the step size for the bounds
       */
      nice(count?: number): linear<T>;

      /**
       * Returns approximately the amount of values requested (or 10, if not declared).
       */
      ticks(count?: number): number[];

      /**
       * Returns a formatting function suitable for displaying a tick value.
       * The value 'count' should be the same as that passed to the 'ticks'
       * function.
       *
       * @param count The same value as the 'count' passed to ticks()
       * @param format An optional format specifier
       */
      tickFormat(count: number, format?: string): (n: number) => string;

      /**
       * Returns a copy of this scale. Changes to the copy will not affect the
       * original, and vice versa.
       */
      copy(): linear<T>;
    }

    /**
     * Creates an empty ordinal scale. The scale is not defined until its range
     * has been set.
     */
    export function ordinal<T>(): ordinal<T>;

    export interface ordinal<T> {
      /**
       * Given a value in the input domain, returns the corresponding value in
       * the output range.
       *
       * @param x the value to map
       */
      (x: number): T;

      /**
       * Given a value in the input domain, returns the corresponding value in
       * the output range.
       *
       * @param x the value to map
       */
      (x: string): T;

      /**
       * Returns the input domain in use by this scale.
       */
      domain(): string[];

      /**
       * Sets the domain to the provided array of values.
       *
       * @param values The array of values to use for the domain
       */
      domain(values: number[]): ordinal<T>;

      /**
       * Sets the domain to the provided array of values.
       *
       * @param values The array of values to use for the domain
       */
      domain(values: string[]): ordinal<T>;

      /**
       * Returns the output range in use by this scale.
       */
      range(): T[];

      /**
       * Sets the output range to the given array of values
       *
       * @param values An array of values to use as the domain
       */
      range<U>(values: U[]): ordinal<U>;

      /**
       * Computes an output range based on the given interval.
       *
       * @param interval A two-element array containing the minimum and maximum numeric values
       * @param padding A multiple of the spacing between points. Defaults to zero
       */
      rangePoints(interval: number[], padding?: number): ordinal<number>;

      /**
       * Computes an output range based on the given interval.
       * 
       * @param interval A two-element array containing the minimum and maximum numeric values
       * @param padding The amount of space in the interval to give to padding. Usually in the range [0, 1].
       * @param outerPadding Like padding, but applies to the entire group of bars
       */
      rangeBands(interval: number[], padding?: number, outerPadding?: number): ordinal<number>;

      /**
       * Computes an output range based on the given interval. Like the
       * 'rangeBands' method, but the output domain is rounded to integers to
       * avoid antialiasing artifacts.
       * 
       * @param interval A two-element array containing the minimum and maximum numeric values
       * @param padding The amount of space in the interval to give to padding. Usually in the range [0, 1].
       * @param outerPadding Like padding, but applies to the entire group of bars
       */
      rangeRoundBands(interval: number[], padding?: number, outerPadding?: number): ordinal<number>;

      /**
       * Returns the band width. This applies only to scales whose ranges were
       * created from rangeBands or rangeRoundBands. In all other cases, this
       * returns zero.
       */
      rangeBand(): number;

      /**
       * Returns the extent of the scale's range: the smallest and largest
       * values.
       */
      rangeExtent(): T[];

      /**
       * Creates a complete copy of the scale. Changes to the copy will not
       * affect the original, and vice versa.
       */
      copy(): ordinal<T>;
    }

    /**
     * Constructs an ordinal scale with a range of 10 categorical colors.
     */
    export function category10(): ordinal<string>;

    /**
     * Constructs an ordinal scale with a range of 20 categorical colors.
     */
    export function category20(): ordinal<string>;

    /**
     * Constructs an ordinal scale with a range of 20 categorical colors.
     */
    export function category20b(): ordinal<string>;

    /**
     * Constructs an ordinal scale with a range of 20 categorical colors.
     */
    export function category20c(): ordinal<string>;
  }
}

interface TouchList {}

declare module 'd3' {
  export = d3;
}
