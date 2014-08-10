'use strict';

var htmlGenerator = {
  link : function(data) {
    var link = '<a href="<%= href %>" title="%= title %"><%= label%></a>';
    return _.template(link, data);
  },
  paragraph: function(data) {
    var paragraph = '<p><%= label %></p>';
    return _.template(paragraph, data);
  },
  list: function(data) {
    var result = '';
    if (data.type === 'ul') {
      result = '<ul><% _(children).forEach(function(child) {%><li><%= child.label %></li><% }); %></ul>}';
    } else {
      result = '<ol><% _(children).forEach(function(child) {%><li><%= child.label %></li><% }); %></ol>}';
    }
    return _.template(result, data);
  }
};
