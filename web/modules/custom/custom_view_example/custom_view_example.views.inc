<?php

use Drupal\views\ViewEntityInterface;
use Drupal\views\Views;

/**
 * Implements hook_views_default_views().
 */
function custom_view_example_views_default_views() {
  $view = new \stdClass();
  $view->name = 'articles_this_week';
  $view->description = 'Lists published articles created this week.';
  $view->base_table = 'node_field_data';
  $view->human_name = 'Articles This Week';
  $view->core = 10;
  $view->disabled = FALSE;

  // Display defaults.
  $view->display = [];

  // Default display.
  $handler = [
    'display_plugin' => 'default',
    'id' => 'default',
    'display_title' => 'Master',
    'position' => 0,
    'display_options' => [
      'access' => ['type' => 'perm', 'options' => ['perm' => 'access content']],
      'query' => ['type' => 'views_query', 'options' => []],
      'exposed_form' => ['type' => 'basic'],
      'pager' => [
        'type' => 'some',
        'options' => ['items_per_page' => 10],
      ],
      'style' => ['type' => 'unformatted'],
      'row' => ['type' => 'fields'],
      'filters' => [
        'status' => [
          'id' => 'status',
          'table' => 'node_field_data',
          'field' => 'status',
          'value' => '1',
          'plugin_id' => 'boolean',
        ],
        // Custom filter plugin.
        'this_week' => [
          'id' => 'this_week',
          'table' => 'node_field_data',
          'field' => 'created',
          'plugin_id' => 'current_week_filter',
        ],
        'type' => [
          'id' => 'type',
          'table' => 'node_field_data',
          'field' => 'type',
          'value' => ['article' => 'article'],
          'plugin_id' => 'bundle',
        ],
      ],
      'fields' => [
        'title' => [
          'id' => 'title',
          'table' => 'node_field_data',
          'field' => 'title',
          'plugin_id' => 'field',
          'label' => 'Title',
          'alter' => [],
        ],
        'created' => [
          'id' => 'created',
          'table' => 'node_field_data',
          'field' => 'created',
          'plugin_id' => 'date',
          'label' => 'Created date',
        ],
      ],
    ],
  ];
  $view->display['default'] = $handler;

  // Page display.
  $handler = [
    'display_plugin' => 'page',
    'id' => 'page_1',
    'display_title' => 'Page',
    'position' => 1,
    'display_options' => [
      'path' => 'articles-this-week',
    ],
  ];
  $view->display['page_1'] = $handler;

  // Return as associative array keyed by view ID.
  return ['articles_this_week' => $view];
}
