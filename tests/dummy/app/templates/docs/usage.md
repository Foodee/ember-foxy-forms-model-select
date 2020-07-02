# Usage

When working with ember-data objects, you may often find your self making a select control that picks from a list of
objects. This can get tedious. Thankfully ember-model-select exists, and so this addon connects it to ember-foxy-forms.

<DocsDemo as |demo|>
  <demo.example @name='usage.hbs'>
    <Form @for={{this.anModel}} class='usage-form' as |f|>
      <f.field 
        @for='single' 
        @using='model-select' 
        @label='Single'
        @values={{this.values}} 
      />
      <f.field 
        @for='single' 
        @using='model-select' 
        @label='Single'
        @values={{this.values}} 
      />
      <f.field 
        @for='multiple' 
        @label='Multiple'
        @using='multi-model-select' 
        @values={{this.values}} 
      />
      <f.field 
        @for='multiple' 
        @label='Multiple'
        @using='multi-model-select' 
        @values={{this.values}} 
      />
    </Form>
  </demo.example>
  <demo.snippet @name='usage.hbs'/>
</DocsDemo>

