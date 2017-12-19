<?php 
/** 
 * CLASS SAVEAS
 * Especially made for extract articles from Indracompany.com
 * 
 * @version 1.0.0
 */
class SaveAs{
    /**
     * Resource's URL
     *
     * @var string
     */
    protected $url;

    /**
     * Text title
     *
     * @var string
     */
    protected $title;

    /**
     * Introduction Text
     *
     * @var string
     */
    protected $intro;

    /**
     * Content text
     *
     * @var string
     */
    protected $content;

    /**
     * Class constructor
     *
     * @param string $url
     * @param string $title
     * @param string $intro
     * @param string $content
     */
    public function __construct($url, $title, $intro, $content){
        $this->url = $url;
        $this->title = $title;
        $this->intro = $intro;
        $this->content = $content;
    }

    /**
     * Set the header and filename
     *
     * @return void
     */
    protected function header(){
        $data = date("Y-m-d");
        $filename = $data . "-" . str_replace(" ","-",$this->title) . ".doc";
        header("Content-type: application/vnd.ms-word");
        header("Content-Disposition: attachment;Filename=$filename");    
    }
    
    /**
     * Set the file's model
     *
     * @return void
     */
    public function Doc(){
        $this->header();
        $html = "<html>";
        $html.= "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">";
        $html.= "<body style='font-family:Arial, sans-serif;'>";
        $html.= "<p><small><a href='" . $this->url . "'>" . $this->url . "</a></small></p>";
        $html.= "<h1>" . $this->title . "</h1>";
        $html.= $this->intro;
        $html.= $this->content;
        $html.= "</body>";
        $html.= "</html>";

        return $html;
    }
}
