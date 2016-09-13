---
layout: default
title: People - Postdoc
---

# People: Postdocs

Click on a name to view or hide details.

Last update: 1 October 2012

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  {% assign iPerson = 1 %}
  
  {% for person in site.data.postdocs.postdocs %}
  
  {% if iPerson == 1 %}
  
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading{{iPerson}}">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse{{iPerson}}" aria-expanded="true" aria-controls="collapse{{iPerson}}">
          {{person.name}}
        </a>
      </h4>
    </div>
    
    <div id="collapse{{iPerson}}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading{{iPerson}}">
      <div class="panel-body">
        {{person.bio}}
      </div>
    </div>
  </div>
  
  {% else %}
  
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading{{iPerson}}">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse{{iPerson}}" aria-expanded="false" aria-controls="collapse{{iPerson}}">
          {{person.name}}
        </a>
      </h4>
    </div>
    <div id="collapse{{iPerson}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{iPerson}}">
      <div class="panel-body">
        {{person.bio}}
      </div>
    </div>
  </div>
  
  {% endif %}
  
  {% assign iPerson = iPerson | plus: 1 %}
  
  {% endfor %}
  
</div>
