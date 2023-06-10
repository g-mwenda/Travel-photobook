class CreateMiniatureSets < ActiveRecord::Migration[6.1]
  def change
    create_table :miniature_sets do |t|
      t.string :name
      t.integer :year

      t.references :user, foreign_key: true
    end
  end
end
