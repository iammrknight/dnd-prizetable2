import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {
      title: 'Full Auto Crossbow',
      lore: 'The steam-smiths were trying to make a nail gun, instead they made a war crime.',
      img: 'assets/img/crossbow.png',
      focus: false,
      description: [
        'A +2 Heavy Auto Crossbow.',
        'Tags: Heavy, Ranged, 2-Handed',
        'Grants the "Crossbow Expert" feat while equipped.',
        'You can shoot 2 bolts in a single action, each doing 1d6+2 piercing damage. You can target one or 2 targets, using the same attack and damage roll for each bolt.'
      ]
    },
    {
      title: 'Staff of Forging',
      lore: 'Smithing tool reserved for elite forgemancers and wizards who like to start fires.',
      img: 'assets/img/fire_staff.png',
      focus: false,
      description: [
        'A +2 Arcane Spellcasting Focus',
        'You have resistance to fire damage while you hold this staff',
        'The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: burning hands (1 charge), fireball (3 charges), or wall of fire (4 charges)',
        'The staff regains 1d6 + 4 expended charges daily at dawn.'
      ]
    },
    {
      title: 'Staff of Quenching',
      lore: 'Smithing tool reserved for elite forgemancers and wizards who like to freeze things.',
      img: 'assets/img/ice_staff.png',
      focus: false,
      description: [
        'A +2 Arcane Spellcasting Focus',
        'You have resistance to frost damage while you hold this staff',
        'The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: cone of cold (5 charges), fog cloud (1 charge), ice storm (4 charges), or wall of ice (4 charges).',
        'The staff regains 1d6 + 4 expended charges daily at dawn.'
      ]
    },
    {
      title: 'Belt of Dwarvenkind',
      lore: 'A wonderous item for true dwarf friends',
      img: 'assets/img/dwarven_belt.png',
      focus: false,
      description: [
        'While wearing this belt your Constitution score increases by 2, to a maximum of 20, and you have advantage on Charisma (Persuasion) checks made to interact with dwarves.',
        'While attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you\'re capable of growing one, or a visibly thicker beard if you already have one.',
        'If you aren\'t a dwarf, you gain the following additional benefits while wearing the belt:',
        '  You have advantage on saving throws against poison, and you have resistance against poison damage.',
        '  You have darkvision out to a range of 60 feet.',
        '  You can speak, read, and write Dwarvish.'
      ]
    },
    {
      title: 'Clockwork Violin',
      lore: 'An inexplicable hodgepodge of art and science, functions as a clock, violin, and weapon of mass destruction.',
      img: 'assets/img/violin.png',
      focus: false,
      description: [
        'A +2 Bardic Focus',
        'Can be used to tell time, which is cool.',
        'If you are proficient in violin and play this instrument as part of a Performance check any roles less than your Charisma score are counted as being equal to your Charisma score.',
        'Once per day the Clockwork Violin can cast Destructive Wave.  This does not expend a spell slot.  After using this feature roll a d20, on a 1 the Clockwork Violin must be repaired by a steamsmith before this feature can be used again.'
      ],
      links: [
        {
          text: 'Destructive Wave',
          url: 'https://www.dndbeyond.com/spells/destructive-wave'
        }
      ]
    }
  ];

  toggleFocus(clickedItem: any) {
    const initialState = clickedItem.focus;

    for (const item of this.items) {
      item.focus = false;
    }

    clickedItem.focus = !initialState;
  }

  getCardStyle(cardItem: any) {
    return {
      card: true,
      'item-card': true,
      'col-md-3': !cardItem.focus,
      'col-md-6': cardItem.focus
    }
  }
}
