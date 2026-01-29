<?php

namespace Drupal\custom_view_example\Plugin\views\filter;

use Drupal\views\Plugin\views\filter\FilterPluginBase;
use Drupal\views\Plugin\views\query\QueryPluginBase;

/**
 * Filters nodes created in the current week.
 *
 * @ViewsFilter("current_week_filter")
 */
class CurrentWeekFilter extends FilterPluginBase {

  /**
   * {@inheritdoc}
   */
  public function query() {
    // Calculate start and end of the current week.
    $start_of_week = strtotime('monday this week');
    $end_of_week = strtotime('sunday this week 23:59:59');

    // Add WHERE condition to the query.
    $this->query->addWhereExpression(
      0,
      "node_field_data.created BETWEEN :start AND :end",
      [
        ':start' => $start_of_week,
        ':end' => $end_of_week,
      ]
    );
  }

}
