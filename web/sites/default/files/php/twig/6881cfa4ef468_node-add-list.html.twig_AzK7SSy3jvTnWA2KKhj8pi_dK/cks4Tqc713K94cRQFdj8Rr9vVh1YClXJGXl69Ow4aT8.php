<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/themes/claro/templates/node-add-list.html.twig */
class __TwigTemplate_55cb0b8507f2a9defe381f864a38838b extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension(SandboxExtension::class);
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 20
        return "@claro/entity-add-list.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 22
        $context["create_content"] = $this->extensions['Drupal\Core\Template\TwigExtension']->getPath("node.type_add");
        // line 24
        $context["add_bundle_message"] = t("You have not created any content types yet. Go to the <a href=\"@create-content\">content type creation page</a> to add a new content type.", ["@create-content" => ($context["create_content"] ?? null)]);
        // line 20
        $this->parent = $this->loadTemplate("@claro/entity-add-list.html.twig", "core/themes/claro/templates/node-add-list.html.twig", 20);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "core/themes/claro/templates/node-add-list.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  48 => 20,  46 => 24,  44 => 22,  37 => 20,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/claro/templates/node-add-list.html.twig", "C:\\xampp\\htdocs\\drupal_10\\web\\core\\themes\\claro\\templates\\node-add-list.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 22);
        static $filters = array("t" => 24);
        static $functions = array("path" => 22);

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['t'],
                ['path'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
